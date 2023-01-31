import React, { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Context } from "../index"
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom"
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE
} from "../utils/const"
import {
  privateRoutes,
  publicRoutes
} from "../routes"

const AppRouter = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return user ? (
    <Switch>
      {privateRoutes.map(
        ({ path, Component }) => {
          return (
            <Route
              key={path}
              path={path}
              component={Component}
            />
          )
        }
      )}
      <Redirect to={PROFILE_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      <DefaultLayout>
        {publicRoutes.map(
          ({ path, Component }) => {
            return (
              <Route
                key={path}
                path={path}
                component={Component}
              />
            )
          }
        )}
      </DefaultLayout>
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  )
}

export default AppRouter
