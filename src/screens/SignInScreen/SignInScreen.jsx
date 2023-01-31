import React, { useContext } from "react"
import firebase from "firebase/compat/app"
import { FcGoogle } from "react-icons/fc"
import { Context } from "../../index"
import "./SignInScreen.scss"
import { SignUpScreen } from "../SignUpScreen"

const SignInScreen = () => {
  const { auth } = useContext(Context)

  const signIn = () => {}

  const login = async () => {
    const provider =
      new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(
      provider
    )
    console.log("user", user)
  }

  return (
    <div className="signin-wrapper">
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      <input placeholder="enter your email" />
      <input placeholder="enter your password" />
      <button onClick={signIn}>Sing in</button>
      <button onClick={login}>
        <FcGoogle
          className="button-icons"
          size={20}
        />
        Sing in with google
      </button>
      <nuxt-link to={SignUpScreen}>
        Create your account
      </nuxt-link>
    </div>
  )
}

export { SignInScreen }
