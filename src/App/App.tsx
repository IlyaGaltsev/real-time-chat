import { Firebase } from '../utils/contexts/Firebase'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../components/Loader'
import Navigator from '../Navigator'

const App: React.FC = () => {
  const { auth } = useContext(Firebase)
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return <Navigator isAuth={Boolean(user)} />
}

export default App
