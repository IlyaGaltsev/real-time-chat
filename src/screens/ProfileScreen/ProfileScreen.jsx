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
    // console.log(user)
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
        </div>
      </ProfileLayout>
    )
  }
}
export { ProfileScreen }
