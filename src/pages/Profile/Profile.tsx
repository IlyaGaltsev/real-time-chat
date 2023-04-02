// import * as S from 'Profile.styled.ts'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import React, { useContext } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { Firebase } from '../../contexts/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Profile = () => {
  const { auth } = useContext(Firebase)
  const [user, isLoading] = useAuthState(auth)


  if (isLoading) return <p>Loading...</p>
  else
    return (
      <div>
   
        {user?.email ?? 'Нет email'} {user?.displayName ?? 'Нет displayName'}{' '}
      </div>
    )
}

export { Profile }
