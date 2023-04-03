import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { colors } from './colors'

export const Form = styled.form(() => ({
  marginTop: 20,
  paddingTop: 48,
  paddingBottom: 28,
  paddingLeft: 28,
  paddingRight: 28,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 340,
  width: '100%',
  background: colors.secondary
}))

export const Title = styled.h3(() => ({
  margin: 0,
  padding: 0,
  fontSize: 28,
  color: colors.fontPrimary
}))

export const SubTitle = styled.p(() => ({
  margin: 0,
  padding: 0,
  fontSize: 16,
  color: colors.fontDescription
}))

export const RouteLink = styled(Link)(() => ({
  color: colors.primary,
  textDecoration: 'none',
  
}))

export const PrimaryButton = styled(Button)(() => ({
  color: colors.fontPrimary,
  background: colors.primary,
  borderRadius: 8,
  fontSize: 14,
  width: '100%',
  fontWeight: '700'
}))

export const PrimaryTextFieldTitle = styled.p(() => ({
  color: colors.fontDescription,
  padding: 0,
  margin: 0,
  paddingBottom: 8,
  width: '100%'
}))

export const PrimaryTextField = styled(TextField)`
  width: 100%;

  .css-cvjans-MuiInputBase-input-MuiOutlinedInput-input,
  .css-cvjans-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
    background-color: ${colors.background};
    border: none;
    padding: 12px;
    border-radius: 8px;
    color: ${colors.fontPrimary};
    border-width: 0;
    width: 100%;
  }
`
// import { makeStyles } from '@material-ui/core/styles';

// (() => ({
//   color: colors.fontPrimary,

//   borderRadius: 8,

//   "MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
//     background: colors.background,
//   }
// }))
