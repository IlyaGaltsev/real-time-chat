import "./NavbarBottom.scss";
import {
  IoChatbubblesOutline,
  IoIdCardOutline,
  IoPeopleOutline,
  IoCogOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  CHAT_ROUTE,
  FRIENDS_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
} from "../../utils/const";

const NavbarBottom = () => {
  return (
    <div className="navabar-bottom">
      <div className="navabar-bottom__wrapper">
        <NavLink
          to={PROFILE_ROUTE}
          className="navabar-bottom__link"
          activeClassName="navabar-bottom__link_active"
        >
          <IoIdCardOutline size={24} />
          <p>Profile</p>
        </NavLink>

        <NavLink
          to={CHAT_ROUTE}
          className="navabar-bottom__link"
          activeClassName="navabar-bottom__link_active"
        >
          <IoChatbubblesOutline size={24} />
          <p>Chat</p>
        </NavLink>

        <NavLink
          to={FRIENDS_ROUTE}
          className="navabar-bottom__link"
          activeClassName="navabar-bottom__link_active"
        >
          <IoPeopleOutline size={24} />
          <p>Friends</p>
        </NavLink>

        <NavLink
          to={SETTINGS_ROUTE}
          className="navabar-bottom__link"
          activeClassName="navabar-bottom__link_active"
        >
          <IoCogOutline size={24} />
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export { NavbarBottom };
