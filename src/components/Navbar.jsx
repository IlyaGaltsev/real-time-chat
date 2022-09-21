/* eslint-disable no-unused-expressions */
import React, {useContext} from "react";
import styled from "styled-components";
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from "../index";
import { IoInvertMode, IoEnterOutline } from "react-icons/io5";
import { useTheme } from "./useTheme";

const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content: center;
    background: var(--toolbar-color);
    height:40px;
    width:100%;
`
const Wrapper = styled.div`
    max-width:1118px;
    width:100%;
    padding-left:12px;
    padding-right:12px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const Title = styled.h4`
    font-size:18px;
    margin:0;
    color:var(--title-color);
`
const Navbar = () => {
    const {auth}= useContext(Context)
    const [user] = useAuthState(auth)

 
    const {theme, setTheme} = useTheme();

    const onClickThemeMode = () => {
        setTheme((theme === 'light') ? 'dark' : 'light')
    }
    const onClickSingOut = () => {
        auth.signOut(); 
        window.location.reload()
    }
    return user?(
            <Header>
              <Wrapper>
                 <IoInvertMode fill="var(--text-color)" stroke="var(--text-color)" size={24} onClick={onClickThemeMode}></IoInvertMode>
                 <Title>Nelegram</Title>
                 <IoEnterOutline fill="var(--text-color)" stroke="var(--text-color)" size={24} onClick={onClickSingOut} className="icon"/>
              </Wrapper>
            </Header>
            ):(
            null
            )
}

export default Navbar;