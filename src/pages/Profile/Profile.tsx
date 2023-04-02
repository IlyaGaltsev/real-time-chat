// import * as S from 'Profile.styled.ts'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Firebase } from '../../contexts/Firebase'

const Profile = () => {
  const { auth } = useContext(Firebase)
  const [user, loading] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
        console.log(error)
      })
  }

  if (loading) return <p>Loading...</p>
  else
    return (
      <div>
        {user?.email ?? 'Нет email'} {user?.displayName ?? 'Нет displayName'}{' '}
        <button onClick={logout}>logout</button>
      </div>
    )
}

export { Profile }
