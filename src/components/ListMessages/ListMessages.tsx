import { DocumentData } from 'firebase/firestore'
import { ListMessagesItem } from '../ListMessagesItem'
import * as S from './ListMessages.styled'

interface IListMessages {
  messages: DocumentData[]
  myUid: string
}

const ListMessages = (props: IListMessages) => {
  const { messages, myUid } = props
  return (
    <S.Wrapper>
      {messages.map((message: DocumentData, index: number) => {
        return (
          <ListMessagesItem
            key={index}
            myUid={myUid}
            message={message}
          />
        )
      })}
    </S.Wrapper>
  )
}

export { ListMessages }
