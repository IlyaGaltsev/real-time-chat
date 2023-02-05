/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthState } from "react-firebase-hooks/auth"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Loader } from "../components/Loader"
import { Context } from "../index"
import { routes } from "../routes"
import "./App.scss"
import React, {
  useContext,
  useEffect
} from "react"
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE
} from "../utils/const"

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
