import './App.css'
import React, {useContext} from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import styled from 'styled-components';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './components/loader';

const Wrapper = styled.div`
  overflow: hidden;
  background:var(--bg-color);
  width:100%;
  min-height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
`
const Contant = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: center;
  height:100%;
  overflow:auto;
`
function App() {
  const {auth}= useContext(Context)
  const [user, loading] = useAuthState(auth)
  
  if (loading){
    return <Loader/>
  }
    return (
      <Router>
       <Wrapper>
        <Navbar/>
         <Contant>
          <AppRouter/> 
         </Contant>
       </Wrapper>       
      </Router>
  );
}

export default App;
