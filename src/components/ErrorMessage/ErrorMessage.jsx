import "./ErrorMessage.scss"
import { VscError } from "react-icons/vsc"

const ErrorMessage = ({ error }) => {
  return (
    <div className="error">
      <VscError />
      <span>{error.message}</span>
    </div>
  )
}

export { ErrorMessage }
