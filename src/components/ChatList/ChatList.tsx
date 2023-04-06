import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import { Firebase } from '../../contexts/Firebase'
import { Loader } from '../Loader'

const ChatList = ({ setChatId }: any) => {
  const { auth, firestore } = useContext(Firebase)

  const [chatsSnapshot, loading, error] = useCollection(
    firestore.collection('chats').where('participants', 'array-contains', auth.currentUser.uid)
  )

  const [users] = useCollectionData(firestore.collection('users'))

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {chatsSnapshot?.docs.map(doc => {
        const chatId = doc.id
        const chatData = doc.data()
        const ohterUser = users?.find(
          (item: any) =>
            item.uid === chatData?.participants.find((item: any) => item !== auth.currentUser.uid)
        )

        return (
          <React.Fragment key={chatId}>
            <Divider
              variant="inset"
              component="div"
            />
            <ListItem
              alignItems="flex-start"
              onClick={() => setChatId(chatId)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={ohterUser?.displayName}
                  src={ohterUser?.photoUrl ?? 'none email'}
                />
              </ListItemAvatar>
              <ListItemText
                primary={ohterUser?.displayName ?? 'none email'}
                secondary={ohterUser?.email ?? 'none email'}
              />
            </ListItem>
          </React.Fragment>
        )
      })}
    </div>
  )
}
export { ChatList }
