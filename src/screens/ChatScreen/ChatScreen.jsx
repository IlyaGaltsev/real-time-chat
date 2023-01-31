import { useCollectionData } from "react-firebase-hooks/firestore"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { useAuthState } from "react-firebase-hooks/auth"
import { ChatTools } from "../../components/ChatTools"
import { Loader } from "../../components/Loader"
import firebase from "firebase/compat/app"
import { Context } from "../../index"
import { v4 as uuidv4 } from "uuid"
import "./ChatScreen.scss"
import React, {
  useContext,
  useState
} from "react"

const ChatScreen = () => {
  const [value, setValue] = useState("")
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(
    firestore
      .collection("messages")
      .orderBy("created")
  )

  const toBottom = () => {
    document
      .getElementById("divFirst")
      .scrollIntoView(true)
  }

  const sendMessage = () => {
    toBottom()
    if (value) {
      firestore.collection("messages").add({
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      })
      setValue("")
    }
  }

  if (loading) {
    return <Loader />
  } else
    return messages ? (
      <DefaultLayout>
        <div id="chatr" className="chat__wrapper">
          {messages.map(message => {
            if (message.uid === user.uid) {
              return (
                <div
                  className="message"
                  key={uuidv4()}
                  style={{
                    justifyContent: "end"
                  }}
                >
                  <div className="text-wrapper">
                    <div className="user-text">
                      {message.text}
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div
                  className="message"
                  key={uuidv4()}
                  style={{
                    alignItems: "self-end"
                  }}
                >
                  <img
                    className="avatar"
                    src={message.photoUrl}
                    alt="Avag"
                  />
                  <div className="text-wrapper">
                    <div className="user-name">
                      {message.displayName}
                    </div>
                    <div className="user-text">
                      {message.text}
                    </div>
                  </div>
                </div>
              )
            }
          })}
          <div id="divFirst"></div>
          <ChatTools
            value={value}
            sendMessage={sendMessage}
            setValue={setValue}
          />
        </div>
      </DefaultLayout>
    ) : (
      <p>not messages: {messages}</p>
    )
}

export { ChatScreen }
