import { createUserWithEmailAndPassword } from "firebase/auth"
import { LOGIN_ROUTE } from "../../utils/const"
import { updateProfile } from "firebase/auth"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../.."
import "./SignUpScreen.scss"

const SignUpScreen = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const { auth } = useContext(Context)

  const createAccount = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userData.name,
          photoURL:
            "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
        })
        window.location.reload()
      })
      .catch(error => {
        alert(error.message)
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
    <form
      className="signin-wrapper"
      onSubmit={createAccount}
    >
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
      <button>Create account</button>
      <Link to={LOGIN_ROUTE}>Sign in</Link>
    </form>
  )
}
export { SignUpScreen }
