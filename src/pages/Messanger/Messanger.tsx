import { useContext, useEffect, useRef, useState } from 'react'
import { Firebase } from '../../contexts/Firebase'
import * as S from './Messanger.styled'
import * as P from '../../styled/PublicComponents.styled'
import { PROFILE_ROUTE } from '../../constants/routesNames'
import { Box } from '@mui/system'
import { ListMessages } from '../../components/ListMessages'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton
} from '@mui/material'
import { ArrowForwardOutlined } from '@mui/icons-material'
import { ChatList } from '../../components/ChatList'
import { ListUsers } from '../../components/ListUsers'
import { colors } from '../../styled/colors'

export interface Chat {
  participants: string[]
  messages: {
    senderId: string
    text: string
  }[]
}

const Messanger = () => {
  const { auth, firestore } = useContext(Firebase)
  const [searchValue, setSearchValue] = useState('')
  const [message, setMessage] = useState('')
  const myUid: string = auth.currentUser.uid ?? ''

  const [chatId, setChatId] = useState('')

  const [chatData, setChatData] = useState<Chat>({
    participants: [],
    messages: [
      {
        senderId: '',
        text: ''
      }
    ]
  })

  const getChatById = async (chatId: string) => {
    const chatRef = firestore.collection('chats').doc(chatId)
    const chatDoc = await chatRef.get()
    const chatData = (await chatDoc.data()) as Chat

    console.log(chatData)
    setChatData(chatData)
  }

  useEffect(() => {
    getChatById(chatId)
  }, [chatId])

  const addNewChat = (otherUserUid: string) => {
    firestore
      .collection('chats')
      .add({
        participants: [auth.currentUser.uid, otherUserUid],
        messages: []
      })
      .catch((error: any) => alert(error))
  }

  const addMessageToChat = async (chatId: string, messageData: any) => {
    const chatRef = firestore.collection('chats').doc(chatId)
    const chatDoc = await chatRef.get()
    const chatData = chatDoc.data()

    const updatedMessages = [...chatData.messages, messageData]

    await chatRef.update({ messages: updatedMessages })
  }

  const sendMessage = () => {
    addMessageToChat(chatId, {
      senderId: auth.currentUser.uid,
      text: message
    })
  }

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper')

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const onUserClick = (uid: string) => {
    handleClose()
    addNewChat(uid)
  }

  return (
    <S.Wrapper>
      <S.Sidebar>
        <Box
          sx={{
            marginTop: 1,
            marginX: 1
          }}
        >
          <P.RouteLink to={PROFILE_ROUTE}>Profile {'>'}</P.RouteLink>
          <P.PrimaryTextField
            placeholder="Search"
            style={{ marginBottom: 12 }}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </Box>
        <Button onClick={handleClickOpen('paper')}>New message</Button>
        <ChatList setChatId={setChatId} />
      </S.Sidebar>

      <S.WrapperChat>
        {chatId !== '' ? (
          chatData?.messages ? (
            <>
              <ListMessages
                myUid={myUid}
                messages={chatData?.messages}
              />
              <S.MessageTool>
                <P.PrimaryTextField
                  placeholder="Search"
                  style={{ marginBottom: 12 }}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <IconButton onClick={sendMessage}>
                  <ArrowForwardOutlined />
                </IconButton>
              </S.MessageTool>
            </>
          ) : (
            <P.CenterBox>
              <p>Cообщений ещё нет</p>
            </P.CenterBox>
          )
        ) : (
          <P.CenterBox background={colors.secondary}>
            <p>Start messangins</p>
          </P.CenterBox>
        )}
      </S.WrapperChat>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Create new chat with</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <ListUsers onUserClick={onUserClick} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </S.Wrapper>
  )
}

export { Messanger }
