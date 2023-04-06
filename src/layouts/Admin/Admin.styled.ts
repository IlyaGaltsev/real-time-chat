import styled from '@emotion/styled'
import { colors } from '../../styled/colors'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: colors.fontPrimary,
  background: colors.secondary,
  maxHeight: '100vh',
  height: '100vh'
}))

