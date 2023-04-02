import { DocumentData } from 'firebase/firestore'
import * as S from './ListMessagesItem.styled'
import Avatar from '@mui/material/Avatar'

interface IListMessagesItem {
  message: DocumentData
  myUid: string
}

const ListMessagesItem = (props: IListMessagesItem) => {
  const {
    message: { uid, text, displayName, photoUrl },
    myUid
  } = props

  const isMyMessage = uid === myUid
  return (
    <S.Message isMyMessage={isMyMessage}>
      {!isMyMessage && (
        <Avatar
          src={photoUrl}
          alt={displayName}
        />
      )}
      <S.MessageTextBox isMyMessage={isMyMessage}>
        {!isMyMessage && <S.MessageTitle>{displayName}</S.MessageTitle>}
        <S.MessageText isMyMessage={isMyMessage}>{text}</S.MessageText>
      </S.MessageTextBox>
    </S.Message>
  )
}
export { ListMessagesItem }
