import { REGISTER_ROUTE } from "../../utils/const"
import { Link } from "react-router-dom"
import "./SignUpScreen.scss"

const SignUpScreen = () => {
  return (
    <div className="signin-wrapper">
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      <input placeholder="enter your name" />
      <input placeholder="enter your email" />
      <input placeholder="enter your password" />
      <input placeholder="repeat your password" />
      <button>Create account</button>
      <Link to={REGISTER_ROUTE}>Sign in</Link>
    </div>
  )
}
export { SignUpScreen }
