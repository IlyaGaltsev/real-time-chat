import styled from '@emotion/styled'

export const Message = styled.div(({ isMyMessage }: any) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: 12,
  maxWidth: '70%',
  alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
  marginBottom: 8
}))

export const MessageTextBox = styled.div(({ isMyMessage }: any) => ({
  background: isMyMessage ? '#578ffe' : '#f1f5fe',
  padding: 8,
  borderRadius: 16,
  borderBottomLeftRadius: isMyMessage ? 8 : 0,
  borderBottomRightRadius: isMyMessage ? 0 : 8
}))

export const MessageTitle = styled.div(() => ({
  fontWeight: '500',
  fontSize: 16
}))

export const MessageText = styled.div(({ isMyMessage }: any) => ({
  color: isMyMessage ? '#fff' : '#696969'
}))
