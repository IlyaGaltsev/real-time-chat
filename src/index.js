import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB8E0dHz8e6R-Cwu2NXRMD6eDW_7vLYaMA",
  authDomain: "chatonreact-2cd47.firebaseapp.com",
  projectId: "chatonreact-2cd47",
  storageBucket: "chatonreact-2cd47.appspot.com",
  messagingSenderId: "837825418557",
  appId: "1:837825418557:web:cfad92e433f15d51e62154",
  measurementId: "G-96HPECZMYH"
});

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{firebase, auth, firestore}}>
       <App />
    </Context.Provider>
  </React.StrictMode>
);
reportWebVitals();
