import "./App.css";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/loader";
import { Admin } from "./layouts/Admin";

function App() {
  const { auth } = useContext(Context);
  // eslint-disable-next-line no-unused-vars
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Admin>
        <AppRouter />
      </Admin>
    </Router>
  );
}

export default App;
