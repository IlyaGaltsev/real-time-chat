import styled from '@emotion/styled'
import { colors } from '../../styled/colors'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  background: colors.background,
  minHeight: '100vh',
}))
