import { CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/const";
import Chat from "./Chat";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn,
  },
  {
    path: REGISTER_ROUTE,
    Component: SignUp,
  },
];
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
