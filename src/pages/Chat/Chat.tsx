import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Firebase } from '../../contexts/Firebase'
import * as S from './Chat.styled'
import { ListMessages } from '../../components/ListMessages'
import { ListUsers } from '../../components/ListUsers'

const Chat = () => {
  const { firestore, auth } = useContext(Firebase)
  const [user] = useAuthState(auth)
  const [messages, isLoading] = useCollectionData(
    firestore.collection('messages').orderBy('created')
  )

  const myUid: string = user?.uid ?? ''

  console.log(myUid, messages)

  if (isLoading) return <p>Loading............</p>
  else
    return (
      <S.Wrapper>
        <ListUsers />
        {messages?.length ? (
          <ListMessages
            myUid={myUid}
            messages={messages}
          />
        ) : (
          <p>Cообщений ещё нет</p>
        )}

        {/* ListMEssages */}
        {/* BottomInput */}
      </S.Wrapper>
    )
}
export { Chat }
