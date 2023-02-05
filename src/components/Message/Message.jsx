import "./Message.scss"

const Message = props => {
  const {
    text,
    uid,
    photoUrl,
    displayName,
    meUid
  } = props

  const itsNoMe = uid !== meUid

  return (
    <div
      className={`message ${
        !itsNoMe && 'me-message'
      }`}
    >
      {itsNoMe && (
        <img
          className="message__avatar"
          src={photoUrl}
          alt="Avag"
        />
      )}
      <div className="message__text-wrapper">
        {itsNoMe && (
          <div className="message__user-name">
            {displayName}
          </div>
        )}
        <div className="message__user-text">
          {text}
        </div>
      </div>
    </div>
  )
}

export { Message }
