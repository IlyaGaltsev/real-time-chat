import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material'
import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Firebase } from '../../utils/contexts/Firebase'

const ListUsers = ({ onUserClick }: any) => {
  const { firestore } = useContext(Firebase)
  const [users, isLoading] = useCollectionData(firestore.collection('users'))

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <List sx={{ width: '100%' }}>
      {users !== undefined &&
        users?.map(({ uid, displayName, email, photoUrl }) => {
          return (
            <React.Fragment key={uid}>
              <Divider
                variant="inset"
                component="li"
              />
              <ListItem
                alignItems="flex-start"
                onClick={() => onUserClick(uid)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={photoUrl}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={displayName ?? 'none displayName'}
                  secondary={email ?? 'none email'}
                />
              </ListItem>
            </React.Fragment>
          )
        })}
    </List>
  )
}

export { ListUsers }
