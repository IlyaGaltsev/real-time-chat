import { ChatBubble, Home, PeopleGroup, SettingsHorizontal } from "akar-icons"
import { SettingsScreen } from "./screens/SettingsScreen/SettingsScreen"
import { FriendsScreen } from "./screens/FriendsScreen"
import { ProfileScreen } from "./screens/ProfileScreen"
import { SignInScreen } from "./screens/SignInScreen"
import { SignUpScreen } from "./screens/SignUpScreen"
import { ChatScreen } from "./screens/ChatScreen"
import { Navigate } from "react-router-dom"
import {
  CHAT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE,
  PROFILE_ROUTE,
  FRIENDS_ROUTE
} from "./utils/const"

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
    icon: <Home strokeWidth={2} size={28} />,
    title: "Profile"
  },
  {
    path: CHAT_ROUTE,
    icon: <ChatBubble strokeWidth={2} size={28} />,
    title: "Chat"
  },
  {
    path: FRIENDS_ROUTE,
    icon: <PeopleGroup strokeWidth={2} size={28} />,
    title: "Friends"
  },
  {
    path: SETTINGS_ROUTE,
    icon: <SettingsHorizontal strokeWidth={2} size={28} />,
    title: "Settings"
  }
]
