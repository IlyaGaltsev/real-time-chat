import { ProfileLayout } from "../../layouts/ProfileLayout"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { Context } from "../../index"
import { useContext } from "react"
import { Door } from "akar-icons"
import "./ProfileScreen.scss"

const ProfileScreen = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const logOut = () => {
    signOut(auth).catch(error => {
      console.log(error)
    })
  }

  let video = document.getElementById("video")
  let canvas = document.getElementById("canvas")
  // let contex = canvas.getContext("2d")
  let photo = document.getElementById("photo")
  let vendorUrl = window.URL || window.webkitURL

  const getImageWeb = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream

        video.play()
      })
      .catch(function (err) {
        console.log("An error occurred: " + err)
      })
  }

  function setImage() {
    var context = canvas.getContext("2d")
    context.drawImage(video, 0, 0, 400, 300)

    var data = canvas.toDataURL("image/png")
    photo.src = data
    console.log(data)
    // console.log("ccilka", URL.createObjectURL(data))
  }

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    )
  } else {
    return (
      <ProfileLayout>
        <div className="profile">
          <div className="profile-card">
            <img
              src={user.photoURL}
              alt="ava"
            />
            <Door
              className="avatar-logout"
              onClick={logOut}
              strokeWidth={2}
              size={24}
            />
            <p>{user.displayName}</p>
            <p>{user.email}</p>
          </div>
          <video
            id="video"
            width="400"
            height="300"
            autoplay
          ></video>

          <canvas
            id="canvas"
            width="400"
            height="300"
          ></canvas>

          <a
            onClick={getImageWeb}
            class="booth-capture-button"
          >
            getImageWeb
          </a>
          <a
            onClick={setImage}
            class="booth-capture-button"
          >
            setImage
          </a>
          <img
            id="photo"
            style={{ background: "rgba(200, 0 , 0, 0.2)" }}
            alt="Ваша фотография"
          />
        </div>
      </ProfileLayout>
    )
  }
}
export { ProfileScreen }
