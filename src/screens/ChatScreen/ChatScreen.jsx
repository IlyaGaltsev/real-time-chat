import { useCollectionData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { ChatTools } from "../../components/ChatTools"
import { Message } from "../../components/Message"
import { Loader } from "../../components/Loader"
import { Navigate } from "react-router-dom"
import firebase from "firebase/compat/app"
import { Context } from "../../index"
import { v4 as uuidv4 } from "uuid"
import "./ChatScreen.scss"
import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from "react"

const ChatScreen = () => {
  const [value, setValue] = useState("")
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const bottomDiv = useRef(null)
  const [messages, loading] = useCollectionData(
    firestore
      .collection("messages")
      .orderBy("created")
  )

  useEffect(() => {
    setTimeout(
      () =>
        bottomDiv.current.scrollIntoView({
          behavior: "smooth"
        }),
      100
    )
  }, [messages])

  const sendMessage = () => {
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
  } else if (!user) {
    return <Navigate to="/" replace />
  } else {
    return messages ? (
      <div className="chat__wrapper">
        <div className="chat__messages">
          {messages.map(message => {
            return (
              <Message
                key={uuidv4()}
                meUid={user.uid}
                {...message}
              />
            )
          })}
          <div
            className="bottomDiv"
            ref={bottomDiv}
          />
        </div>
        <ChatTools
          value={value}
          sendMessage={sendMessage}
          setValue={setValue}
        />
      </div>
    ) : (
      <p>First word for you. Start a chat!</p>
    )
  }
}

export { ChatScreen }
