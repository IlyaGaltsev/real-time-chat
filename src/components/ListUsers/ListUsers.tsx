import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material'
import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Firebase } from '../../contexts/Firebase'

// interface IListUser {
// uid: string
//   displayName: string
//   email: string
//   photoUrl: string
// }

const ListUsers = () => {
  const { firestore } = useContext(Firebase)

  const [users, isLoading] = useCollectionData(firestore.collection('users'))

  if (isLoading) return <p>loading...</p>
  else
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users !== undefined &&
          users?.map(({ uid, displayName, email, photoUrl }) => {
            return (
              <React.Fragment key={uid}>
                <ListItem alignItems="flex-start">
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
                <Divider
                  variant="inset"
                  component="li"
                />
              </React.Fragment>
            )
          })}
      </List>
    )
}

export { ListUsers }
