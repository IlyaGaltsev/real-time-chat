import { useAuthState } from "react-firebase-hooks/auth"
import { Loader } from "../components/Loader"
import React, {
  useContext,
  useEffect,
  useState
} from "react"
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"
import { Context } from "../index"
import "./App.scss"
import { routes } from "../routes"
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE
} from "../utils/const"
import { DefaultLayout } from "../layouts/DefaultLayout"

function App() {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    user
      ? navigate(PROFILE_ROUTE)
      : navigate(LOGIN_ROUTE)

    console.log("user:", user)
  }, [user])

  if (loading) {
    return <Loader />
  } else {
    return (
      <DefaultLayout>
        <Routes>
          {routes.map(({ path, Component }) => {
            return (
              <Route
                key={path}
                path={path}
                element={Component}
              />
            )
          })}
        </Routes>
      </DefaultLayout>
    )
  }
}

export { App }
