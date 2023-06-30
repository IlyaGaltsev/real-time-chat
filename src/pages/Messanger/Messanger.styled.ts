import { keyframes } from '@mui/system'
import styled from '@emotion/styled'
import { colors } from '../../styled/colors'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  width: '100%'
}))

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${colors.background};
  height: 100vh;
  animation: ${fadeIn} 1s;
`

export const WrapperChat = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100vh',
  overflowY: 'auto'
}))

export const MessageTool = styled.div(() => ({
  padding: 8,
  paddingLeft: 20,
  paddingRight: 20,
  display: 'flex',
  alignItems: 'center',
  // width: '100%',
  position: 'sticky',
  bottom: 0,
  backdropFilter: 'blur(5px)'
  /* задаем цвет фона для браузеров, не поддерживающих backdrop-filter */
  // backgroundColor: 'rgba(255, 255, 255, 0.8)'
}))
