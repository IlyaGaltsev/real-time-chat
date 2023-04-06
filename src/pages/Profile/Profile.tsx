import * as S from './Profile.styled'
import * as P from '../../styled/PublicComponents.styled'
import React, { useContext, useState } from 'react'
import { Firebase } from '../../contexts/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar, Button, Input } from '@mui/material'
import { signOut, updateProfile } from 'firebase/auth'
import { Loader } from '../../components/Loader'

const Profile = () => {
  const { auth, firestore } = useContext(Firebase)
  const [user, isLoading] = useAuthState(auth)
  const [photoURL, setPhotoURL] = useState('')

  const updateImage = (url: string) => {
    updateProfile(auth.currentUser, {
      photoURL: url
    })

    firestore.collection('users').where('uid', '==', `${auth.currentUser.uid}`)
    .get()
    .then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        const docRef = doc.ref;
        const dataToUpdate = { photoUrl: url };
        docRef.update(dataToUpdate)
          .then(() => {
            console.log('Данные успешно обновлены');
          })
          .catch((error: any) => {
            console.error('Ошибка при обновлении данных:', error);
          });
      });
    });
  }

  if (isLoading) return <Loader />

  return (
    <S.Wrapper>
      <Avatar
        sx={{ width: 130, height: 130, marginBlock: 3 }}
        alt="Remy Sharp"
        src={user?.photoURL ?? ''}
      />
      <P.Title style={{ marginBottom: 8 }}>{user?.displayName}</P.Title>
      {user?.email ?? 'Нет email'}{' '}
      <Input
        value={photoURL}
        onChange={e => setPhotoURL(e.target.value)}
      />
      <Button onClick={() => updateImage(photoURL)}>UPLOAD</Button>
      <Button onClick={() => signOut(auth)}>EXIT</Button>
    </S.Wrapper>
  )
}

export { Profile }
