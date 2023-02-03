
import { NavbarBottomLink } from "../NavbarBottomLink"
import { navbarlinks } from "../../routes"
import "./NavbarBottom.scss"

const NavbarBottom = () => {
  return (
    <div className="navabar-bottom">
      <div className="navabar-bottom__wrapper">
        {navbarlinks.map(
          ({ path, icon, title }) => {
            return (
              <NavbarBottomLink
                key={path}
                path={path}
                icon={icon}
                title={title}
              />
            )
          }
        )}
      </div>
    </div>
  )
}

export { NavbarBottom }
