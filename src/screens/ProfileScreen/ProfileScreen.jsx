import { ProfileLayout } from "../../layouts/ProfileLayout"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../../index"
import {
  useContext,
  useLayoutEffect,
  useRef,
  useState
} from "react"
import "./ProfileScreen.scss"
import { signOut } from "firebase/auth"
import { updateProfile } from "firebase/auth"
import { Navigate } from "react-router-dom"
import { Check, Door, Pencil } from "akar-icons"

const ProfileScreen = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const logOut = () => {
    signOut(auth).catch(error => {
      console.log(error)
    })
  }

  if (!user) {
    return <Navigate to="/" replace />
  } else {
    return (
      <ProfileLayout>
        <div className="profile">
          <div className="profile-card">
            <img src={user.photoURL} alt="ava" />
            <Door
              className="avatar-logout"
              onClick={logOut}
              strokeWidth={2}
              size={24}
            />
            <p>
            {user.displayName}
            </p>
            <p>{user.email}</p>
          </div>
        </div>
      </ProfileLayout>
    )
  }
}
export { ProfileScreen }
