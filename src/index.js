import { BrowserRouter as Router } from "react-router-dom"
import { config } from "./utils/firebase-config"
import reportWebVitals from "./reportWebVitals"
import React, { createContext } from "react"
import firebase from "firebase/compat/app"
import ReactDOM from "react-dom/client"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { App } from "./App"
import "./index.scss"

export const Context = createContext(null)

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()
const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{ firebase, auth, firestore }}
    >
      <Router>
        <App />
      </Router>
    </Context.Provider>
  </React.StrictMode>
)
reportWebVitals()
