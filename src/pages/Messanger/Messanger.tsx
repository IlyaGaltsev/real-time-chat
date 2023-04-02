import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Firebase } from '../../contexts/Firebase'
import * as S from './Messanger.styled'

const Messanger = () => {
  const { auth } = useContext(Firebase)
  const [user] = useAuthState(auth)

  const myUid: string = user?.uid ?? ''

  console.log(myUid)


  return (
    <S.Wrapper>

      {/* ListMEssages 2 user */}
      {/* BottomInput */}
    </S.Wrapper>
  )
}

export { Messanger }
