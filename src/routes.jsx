import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen/SettingsScreen";
import { FriendsScreen } from "./screens/FriendsScreen";
import {
  CHAT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE,
  PROFILE_ROUTE,
  FRIENDS_ROUTE,
} from "./utils/const";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignInScreen,
  },
  {
    path: REGISTER_ROUTE,
    Component: SignUpScreen,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: ChatScreen,
  },
  {
    path: PROFILE_ROUTE,
    Component: ProfileScreen,
  },
  {
    path: SETTINGS_ROUTE,
    Component: SettingsScreen,
  },
  {
    path: FRIENDS_ROUTE,
    Component: FriendsScreen,
  },
];
