import { DocumentData } from 'firebase/firestore'
import * as S from './ListMessagesItem.styled'
import { Avatar } from '@mui/material'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useContext } from 'react'
import { Firebase } from '../../contexts/Firebase'
import { Loader } from '../Loader'
import { colors } from '../../styled/colors'

interface IListMessagesItem {
  message: DocumentData
  myUid: string
}

const ListMessagesItem = (props: IListMessagesItem) => {
  const {firestore} = useContext(Firebase)
  const {
    message: { senderId, text },
    myUid
  } = props

  const isMyMessage = senderId === myUid

  const [users, isLoading] = useCollectionData(firestore.collection('users'))

  const user = users?.find((item: any) => item.uid === senderId)

  if (isLoading) return <Loader background={colors.secondary}/>

  return (
    <S.Message isMyMessage={isMyMessage}>
      {!isMyMessage && (
        <Avatar
          src={user?.photoUrl ?? ""}
          alt={user?.displayName ?? "displayName is none"}
        />
      )}
      <S.MessageTextBox isMyMessage={isMyMessage}>
        {!isMyMessage && <S.MessageTitle>{user?.displayName ??  "displayName is none" }</S.MessageTitle>}
        <S.MessageText isMyMessage={isMyMessage}>{text}</S.MessageText>
      </S.MessageTextBox>
    </S.Message>
  )
}
export { ListMessagesItem }
