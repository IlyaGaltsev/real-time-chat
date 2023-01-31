import { NavbarBottom } from "../../components/NavbarBottom"
import "./ProfileLayout.scss"

const ProfileLayout = ({ children }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-contant">
        {children}
      </div>
      <NavbarBottom />
    </div>
  )
}
export { ProfileLayout }
