import styled from '@emotion/styled'
import { colors } from '../../styled/colors'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  width: '100%'
}))

export const Sidebar = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  background: colors.background,
  height: '100vh'
}))

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
  backdropFilter: 'blur(5px)',
  /* задаем цвет фона для браузеров, не поддерживающих backdrop-filter */
  // backgroundColor: 'rgba(255, 255, 255, 0.8)'
}))
