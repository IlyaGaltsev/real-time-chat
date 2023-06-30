import React from 'react'
import { Firebase } from '../../utils/contexts/Firebase'
import { type FieldValues, useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as P from '../../styled/PublicComponents.styled'
import { signInFileds } from '../../utils/constants/fileds'
import { SIGNUP_ROUTE } from '../../utils/constants/routesNames'
import { type IFileds } from '../../types'
import { useContext } from 'react'

const SignIn: React.FC = () => {
  const { auth } = useContext(Firebase)
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const signIn = ({ email, password }: FieldValues) => {
    signInWithEmailAndPassword(auth, email, password).catch(err => {
      const jsonError = JSON.stringify(err)
      const code = JSON.parse(jsonError).code

      if (code.includes('password') != null) {
        setError('password', {
          message: 'Incorrect password'
        })
      }

      if (code.includes('requests') != null) {
        setError('email', {
          message: 'Too many login attempts'
        })
      }

      if (code.includes('found') != null) {
        setError('email', {
          message: 'Not found this user'
        })
      }
    })
  }

  return (
    <P.Form onSubmit={handleSubmit(signIn)}>
      <P.Title style={{ marginBottom: 4 }}>Sign In</P.Title>
      <P.SubTitle style={{ marginBottom: 16 }}>Sign in your account</P.SubTitle>
      {signInFileds.map(({ name, placeholder, type, options }: IFileds) => {
        return (
          <React.Fragment key={name}>
            <P.PrimaryTextFieldTitle>{name}</P.PrimaryTextFieldTitle>
            <P.PrimaryTextField
              error={Boolean(errors[name])}
              placeholder={placeholder}
              type={type}
              style={{ marginBottom: 12 }}
              helperText={errors[name]?.message?.toString()}
              {...register(name, options)}
            />
          </React.Fragment>
        )
      })}
      <P.PrimaryButton
        style={{ marginTop: 8, marginBottom: 20 }}
        type="submit"
        variant="contained"
      >
        Sign In
      </P.PrimaryButton>
      <P.SubTitle>
        {'Don`t have an account? '}
        <P.RouteLink to={SIGNUP_ROUTE}>Create account</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignIn }
