import { ErrorMessage } from "../ErrorMessage"
import "./TextInput.scss"

const TextInput = ({ name, register, errors, options, placeholder, type = "text" }) => {
  return (
    <>
      <input
        className={`input ${errors && "input_error"}`}
        placeholder={placeholder}
        type={type}
        {...register(name, options)}
      />
      {errors && <ErrorMessage error={errors} />}
    </>
  )
}

export { TextInput }
