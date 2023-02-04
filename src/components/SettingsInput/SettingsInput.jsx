import { Check, Pencil } from "akar-icons"
import { useLayoutEffect, useState } from "react"
import "./SettingsInput.scss"

const SettingsInput = props => {
  const [change, setChange] = useState(false)
  const {
    title,
    name,
    value,
    referense,
    onChange,
    onSave
  } = props

  useLayoutEffect(() => {
    if (change) {
      referense.current.disabled = false
    } else {
      referense.current.disabled = true
      referense.current.focus()
    }
  }, [change, referense])

  const handleOnClick = () => {
    setChange(!change)
    change && onSave(value)
  }

  return (
    <div className="settings-input">
      <p>{title}</p>
      <div className="settings-input__wrapper">
        <input
          name={name}
          value={value}
          ref={referense}
          onChange={onChange}
          type="text"
        />
        {change ? (
          <Check
            onClick={handleOnClick}
            strokeWidth={1}
            size={16}
          />
        ) : (
          <Pencil
            onClick={handleOnClick}
            strokeWidth={1}
            size={16}
          />
        )}
      </div>
    </div>
  )
}
export { SettingsInput }
