import React from "react"
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import * as routesNames from './constants/routesNames'

export const publicRoutes = [
  {
    path: routesNames.SIGNIN_ROUTE,
    Component: <SignIn />
  },
  {
    path: routesNames.SIGNUP_ROUTE,
    Component: <SignUp />
  },

  {
    path: '*',
    Component: <SignIn />
  }

]

export const privateRoutes = [
  {
    path: routesNames.DESKTOP_SCREEN,
    Component: <Profile />
  },
  {
    path: '*',
    Component: <Profile />
  }
]