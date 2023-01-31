import { BrowserRouter as Router } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import AppRouter from "../components/AppRouter"
import { Loader } from "../components/Loader"
import React, { useContext } from "react"
import { Context } from "../index"
import "./App.scss"

function App() {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export { App }
