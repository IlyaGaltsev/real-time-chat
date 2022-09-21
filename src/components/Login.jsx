import React, { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';
import styled from "styled-components";
import logo from '../assets/images/logo.png'
import pathLogo from '../assets/icons/Google.png'

const LoginPopUp = styled.div`
    width:100%;
    height:100%;
    background:var(--bg-color);
    color:var(--text-color);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`
const H1 = styled.h1`
    font-size:36px;
    margin-bottom:38px;
    color:var(--title-color)
`
const Text = styled.p`
    font-size:16px;
    color:#8D8D8D;
    max-width:317px;
    text-align:center;
    margin-bottom:74px;
`
const ButtonLogin = styled.button`
    padding:14px;
    display:flex;
    align-items:center;
    background:var(--bg-color);
    border:2px solid var(--title-color);
    border-radius:10px;
    color:var(--text-color)
`

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
        // window.location.reload();
    }
    return(
        <LoginPopUp>
            <img style={{marginBottom:55, maxWidth:143}} src={logo} alt="logo" />
            <H1>Nelegram</H1>
            <Text>Классный чат на React + Firebase, разработанный за одну бессонную ночь</Text>
            <ButtonLogin onClick={login}>
                <img style={{marginRight:24}} src={pathLogo} alt="google" />
                ВОЙТИ С ПОМОЩЬЮ ГУГЛ
            </ButtonLogin>
        </LoginPopUp>
    )
}

export default Login;