import { LOGIN_ROUTE } from "../../utils/const"
import { Link } from "react-router-dom"
import "./SignUpScreen.scss"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import { Context } from "../.."
import { updateProfile } from "firebase/auth"

const SignUpScreen = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const { auth } = useContext(Context)

  const createAccount = () => {
    createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userData.name,
          photoURL: "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
        })
        window.location.reload()
      })
      .catch(error => {
        console.log("error-signup", error)
      })
  }

  const handleOnChange = e => {
    let name = e.target.name
    setUserData({
      ...userData,
      [name]: e.target.value
    })
  }
  return (
    <div className="signin-wrapper">
      <h1>Real Time Chat</h1>
      <p>create your account</p>
      <input
        name="name"
        value={userData.name}
        onChange={handleOnChange}
        placeholder="enter your name"
      />
       <input
        name="email"
        value={userData.email}
        onChange={handleOnChange}
        placeholder="enter your email"
      />
      <input
        name="password"
        value={userData.password}
        onChange={handleOnChange}
        placeholder="enter your password"
      />
      <button onClick={createAccount}>
        Create account
      </button>
      <Link to={LOGIN_ROUTE}>Sign in</Link>
    </div>
  )
}
export { SignUpScreen }
