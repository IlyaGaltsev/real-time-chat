import React, {useContext, useState} from "react";
import firebase from 'firebase/compat/app';
import { Context } from "../index";
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import Loader from "./loader";
import styled from "styled-components";
import strelka from "../assets/icons/strelka.png"
import { v4 as uuidv4 } from 'uuid';

const WraperChat = styled.div`
    width:100%;
    height:100%;
    max-width:1118px;
`
const Message = styled.div`
    display:flex;
    margin: 6px 12px 6px 12px;
`
const Avatar = styled.img`
    border-radius:100px;
    width:36px;
    height:36px;
    position:sticky;
    bottom:68px;
`
const TextWrapper = styled.div`
    background:var(--message-color);
    padding: 9px 18px 8px 18px;
    border-radius:18px;
    margin-left: 8px;
    max-width: 60vw;
`
const UserName = styled.div`
    font-size:12px;
    color:var(--title-color);
`
const UserText = styled.div`
    font-size:14px;
    color:var(--text-color);
`
const BottomTools = styled.div`
    position:sticky;
    left:0;
    bottom:0;
    width:100%;
    height:50px;
    background:var(--toolbar-color);
    display:flex;
    flex-direction:row;
    align-items:center;
    border-top-left-radius:20px;
    border-top-right-radius: 20px;
`
const ButtonSend = styled.button`
    border: 0px;
    max-width:36px;
    width:100%;
    height:36px;
    border-radius:100px;
    margin-right:12px;
    background:var(--title-color);
`

const Chat = () => {
    const [value, setValue]= useState('')
    const {auth, firestore}= useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy("created")
    )


    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
        let bottom = document.getElementById('bottom')
        bottom.scrollIntoView()
    }

    // let bottom = document.getElementById('bottom')
    // bottom.scrollIntoView()
    if (loading){
        return <Loader/>
      }
     else
    return(
        <WraperChat>
            {messages.map(message => {
                if (message.uid === user.uid){
                    return(
                        <Message key={uuidv4()} style={{justifyContent: "end"}}>
                            <TextWrapper>
                               <UserText>{message.text}</UserText> 
                            </TextWrapper>
                        </Message> 
                    )
                }else{
                    return(
                        <Message key={uuidv4()} style={{alignItems: "self-end"}}>
                            <Avatar  src={message.photoUrl} alt="Avag" />
                            <TextWrapper>
                                <UserName>{message.displayName}</UserName>
                               <UserText>{message.text}</UserText> 
                            </TextWrapper>
                        </Message>
                    )
                }            
            })}
            <div id="bottom"></div>
            <BottomTools>
            <input className="bottomtools__input" value={value} onChange={e => setValue(e.target.value)} type="text" />
            <ButtonSend onClick={sendMessage}>
                <img src={strelka} alt="SEND" />
            </ButtonSend>
            </BottomTools>
        </WraperChat>
    )
}

export default Chat;