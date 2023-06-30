import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Firebase } from './utils/contexts/Firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { config } from './utils/configs/firebase-config'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { ThemeProvider } from '@mui/system'
import { darkTheme } from './styled/themes'
import App from './App'

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
