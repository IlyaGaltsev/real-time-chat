import { createUserWithEmailAndPassword } from "firebase/auth"
import { signUpFileds } from "../../utils/inputFileds"
import { TextInput } from "../../components/TextInput"
import { LOGIN_ROUTE } from "../../utils/const"
import { updateProfile } from "firebase/auth"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../.."
import "./SignUpScreen.scss"

const SignUpScreen = () => {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const { auth } = useContext(Context)

  const createAccount = data => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
        })
      })
      .catch(err => {
        let jsonError = JSON.stringify(err)
        const code = JSON.parse(jsonError).code

        if (code.includes("email-already-in-use")) {
          setError("email", {
            message: "Email already in use"
          })
        }
      })
  }

  return (
    <form
      className="signin-wrapper"
      onSubmit={handleSubmit(createAccount)}
    >
      <h1>Real Time Chat</h1>
      <p>create your account</p>
      {signUpFileds.map(fileds => {
        return (
          <TextInput
            errors={errors[fileds.name]}
            register={register}
            key={fileds.name}
            {...fileds}
          />
        )
      })}
      <button>Create account</button>
      <Link to={LOGIN_ROUTE}>Sign in</Link>
    </form>
  )
}
export { SignUpScreen }
