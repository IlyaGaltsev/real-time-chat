import { NavLink } from "react-router-dom"
import "./NavbarBottomLink.scss"

const NavbarBottomLink = props => {
  const { path, icon, title } = props
  
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `navabar-bottom__link ${
          isActive &&
          "navabar-bottom__link_active"
        }`
      }
    >
      {icon}
      <p>{title}</p>
    </NavLink>
  )
}
export { NavbarBottomLink }
