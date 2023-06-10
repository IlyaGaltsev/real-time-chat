import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

import { Firebase } from './contexts/Firebase'
import { HashRouter as Router } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { config } from './utils/firebase-config'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { ThemeProvider } from '@mui/system'
import { darkTheme } from './styled/themes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

root.render(
  <React.StrictMode>
    <Firebase.Provider value={{ firebase, auth, firestore }}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </Router>
    </Firebase.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
