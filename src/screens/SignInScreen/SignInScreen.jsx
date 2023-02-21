import { signInWithEmailAndPassword } from "firebase/auth"
import { REGISTER_ROUTE } from "../../utils/const"
import firebase from "firebase/compat/app"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { Context } from "../../index"
import "./SignInScreen.scss"
import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { TextInput } from "../../components/TextInput"
import { signInFileds } from "../../utils/inputFileds"

const SignInScreen = () => {
  const { auth } = useContext(Context)
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const signIn = data => {
    console.log(data)

    signInWithEmailAndPassword(auth, data.email, data.password).catch(err => {
      let jsonError = JSON.stringify(err)
      const code = JSON.parse(jsonError).code

      if (code.includes("password")) {
        setError("password", {
          message: "Incorrect password"
        })
      }

      if (code.includes("requests")) {
        setError("email", {
          message: "Too many login attempts"
        })
      }

      if (code.includes("found")) {
        setError("email", {
          message: "Not found this user"
        })
      }
    })
  }

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log("user", user)
  }

  return (
    <form
      className="signin-wrapper"
      onSubmit={handleSubmit(signIn)}
    >
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      {signInFileds.map(fileds => {
        return (
          <TextInput
            key={fileds.name}
            register={register}
            errors={errors[fileds.name]}
            {...fileds}
          />
        )
      })}
      <button>Sing in</button>
      <button onClick={signInWithGoogle}>
        <FcGoogle
          className="button-icons"
          size={20}
        />
        Sing in with google
      </button>
      <Link to={REGISTER_ROUTE}>Create your account</Link>
    </form>
  )
}

export { SignInScreen }
