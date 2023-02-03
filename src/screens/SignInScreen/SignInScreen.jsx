import React, {
  useContext,
  useState
} from "react"
import firebase from "firebase/compat/app"
import { FcGoogle } from "react-icons/fc"
import { Context } from "../../index"
import "./SignInScreen.scss"
import { signInWithEmailAndPassword } from "firebase/auth"
import { PROFILE_ROUTE, REGISTER_ROUTE } from "../../utils/const"
import { Link, useNavigate } from "react-router-dom"

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
    console.log(userData)
  }



  const signIn = () => {
    signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log("user", user)

        // ...
      })
      .catch(error => {
        console.log("error-signin", error)
      })
  }

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
      <button onClick={signIn}>Sing in</button>
      <button onClick={login}>
        <FcGoogle
          className="button-icons"
          size={20}
        />
        Sing in with google
      </button>
      <Link to={REGISTER_ROUTE}>
        Create your account
      </Link>
    </div>
  )
}

export { SignInScreen }
