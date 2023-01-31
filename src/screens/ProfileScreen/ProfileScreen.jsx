import { ProfileLayout } from "../../layouts/ProfileLayout"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../../index"
import { useContext } from "react"
import "./ProfileScreen.scss"


const ProfileScreen = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <ProfileLayout>
      <div className="profile">
        <div className="profile-card">
          <img src={user.photoURL} alt="ava" />
          <p>
            User
            {user.uid.substr(user.uid.length - 5)}
          </p>
          <p>{user.email}</p>
        </div>
      </div>
    </ProfileLayout>
  )
}
export { ProfileScreen }
