import React, { useContext } from "react";
import { Context } from "../../index";
import firebase from "firebase/compat/app";
import "./SignIn.scss";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { auth } = useContext(Context);

  const signIn = () => {};

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log("user", user);
  };

  const toSingUp = () => {
    window.location.href = window.location.origin + "/register";
  };

  return (
    <div className="signin-wrapper">
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      <input placeholder="enter your email" />
      <input placeholder="enter your password" />
      <button onClick={signIn}>Sing in</button>
      <button onClick={login}>
        <FcGoogle className="button-icons" size={20} />
        Sing in with google
      </button>
      <a href="#x3" onClick={toSingUp}>
        Create your account
      </a>
    </div>
  );
};

export { SignIn };
