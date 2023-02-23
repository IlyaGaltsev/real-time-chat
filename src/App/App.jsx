import React, { useContext, useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { privateRoutes, publicRoutes } from "../routes"
import { ThemeContext } from "../Contexts/themeContext"
import { Route, Routes } from "react-router-dom"
import { Loader } from "../components/Loader"
import { Context } from "../index"
import "./App.scss"

function App() {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)

  const startValue = () => {
    let value = JSON.parse(localStorage.getItem("isTheme"))
    return value ? value : false
  }

  const [isTheme, setTheme] = useState(startValue())

  useEffect(() => {
    localStorage.setItem("isTheme", isTheme)

    if (isTheme) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    }
  }, [isTheme])

  const setAppTheme = () => {
    setTheme(!isTheme)
  }

  if (loading) {
    return <Loader />
  } else {
    return (
      <ThemeContext.Provider value={{ isTheme, setAppTheme }}>
        <DefaultLayout>
          {user ? (
            <Routes>
              {privateRoutes.map(({ path, Component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={Component}
                  />
                )
              })}
            </Routes>
          ) : (
            <Routes>
              {publicRoutes.map(({ path, Component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={Component}
                  />
                )
              })}
            </Routes>
          )}
        </DefaultLayout>
      </ThemeContext.Provider>
    )
  }
}

export { App }
