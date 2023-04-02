import React from 'react'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import * as routesNames from './constants/routesNames'
import { Messanger } from './pages/Messanger'
import { Chat } from './pages/Chat'

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
    path: routesNames.PROFILE_ROUTE,
    Component: <Profile />
  },
  {
    path: routesNames.MESSANGER_ROUTE,
    Component: <Messanger />
  },
  {
    path: routesNames.CHAT_ROUTE,
    Component: <Chat />
  },
  {
    path: '*',
    Component: <Profile />
  }
]
