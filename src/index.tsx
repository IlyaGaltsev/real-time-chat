import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

import { Firebase } from './contexts/Firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { config } from './utils/firebase-config'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

root.render(
  <React.StrictMode>
    <Firebase.Provider value={{ firebase, auth, firestore }}>
      <Router>
        <App />
      </Router>
    </Firebase.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
