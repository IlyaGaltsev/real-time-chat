import "./DefaultLayout.scss"

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-wrapper">
      <div className="default-contant">
        {children}
      </div>
    </div>
  )
}

export { DefaultLayout }
