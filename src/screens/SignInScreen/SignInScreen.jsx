import { signInWithEmailAndPassword } from "firebase/auth"
import { REGISTER_ROUTE } from "../../utils/const"
import firebase from "firebase/compat/app"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { Context } from "../../index"
import "./SignInScreen.scss"
import React, {
  useContext,
  useState
} from "react"

const SignInScreen = () => {
  const { auth } = useContext(Context)
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleOnChangeInput = e => {
    let name = e.target.name
    setUserData({
      ...userData,
      [name]: e.target.value
    })
  }

  const signIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    ).catch(error => {
      alert(error.message)
    })
  }

  const signInWithGoogle = async () => {
    const provider =
      new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(
      provider
    )
    console.log("user", user)
  }

  return (
    <form
      className="signin-wrapper"
      onSubmit={signIn}
    >
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      <input
        name="email"
        value={userData.email}
        onChange={handleOnChangeInput}
        placeholder="enter your email"
      />
      <input
        name="password"
        value={userData.password}
        onChange={handleOnChangeInput}
        placeholder="enter your password"
      />
      <button>Sing in</button>
      <button onClick={signInWithGoogle}>
        <FcGoogle
          className="button-icons"
          size={20}
        />
        Sing in with google
      </button>
      <Link to={REGISTER_ROUTE}>
        Create your account
      </Link>
    </form>
  )
}

export { SignInScreen }
