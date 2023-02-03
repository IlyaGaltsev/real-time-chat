import { SignInScreen } from "./screens/SignInScreen"
import { SignUpScreen } from "./screens/SignUpScreen"
import { ChatScreen } from "./screens/ChatScreen"
import { ProfileScreen } from "./screens/ProfileScreen"
import { SettingsScreen } from "./screens/SettingsScreen/SettingsScreen"
import { FriendsScreen } from "./screens/FriendsScreen"
import {
  IoChatbubblesOutline,
  IoIdCardOutline,
  IoPeopleOutline,
  IoCogOutline
} from "react-icons/io5"
import {
  CHAT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE,
  PROFILE_ROUTE,
  FRIENDS_ROUTE
} from "./utils/const"
import { Navigate } from "react-router-dom"

export const routes = [
  {
    path: LOGIN_ROUTE,
    Component: <SignInScreen />
  },
  {
    path: REGISTER_ROUTE,
    Component: <SignUpScreen />
  },
  {
    path: CHAT_ROUTE,
    Component: <ChatScreen />
  },
  {
    path: PROFILE_ROUTE,
    Component: <ProfileScreen />
  },
  {
    path: SETTINGS_ROUTE,
    Component: <SettingsScreen />
  },
  {
    path: FRIENDS_ROUTE,
    Component: <FriendsScreen />
  },
  {
    path: "*",
    Component: <Navigate to="/" replace />
  }
]

export const navbarlinks = [
  {
    path: PROFILE_ROUTE,
    icon: <IoIdCardOutline size={24} />,
    title: "profile"
  },
  {
    path: CHAT_ROUTE,
    icon: <IoChatbubblesOutline size={24} />,
    title: "chat"
  },
  {
    path: FRIENDS_ROUTE,
    icon: <IoPeopleOutline size={24} />,
    title: "friends"
  },
  {
    path: SETTINGS_ROUTE,
    icon: <IoCogOutline size={24} />,
    title: "settings"
  }
]
