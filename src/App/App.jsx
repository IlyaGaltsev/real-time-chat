/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthState } from "react-firebase-hooks/auth"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { Loader } from "../components/Loader"
import React, { useContext } from "react"
import { Context } from "../index"
import {
  privateRoutes,
  publicRoutes
} from "../routes"
import "./App.scss"

function App() {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />
  } else {
    return (
      <DefaultLayout>
        {user ? (
          <Routes>
            {privateRoutes.map(
              ({ path, Component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={Component}
                  />
                )
              }
            )}
          </Routes>
        ) : (
          <Routes>
            {publicRoutes.map(
              ({ path, Component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={Component}
                  />
                )
              }
            )}
          </Routes>
        )}
      </DefaultLayout>
    )
  }
}

export { App }
