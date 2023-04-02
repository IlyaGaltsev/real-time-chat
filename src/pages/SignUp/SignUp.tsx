// import * as S from 'SignUp.styled.ts'
import React from 'react'
import { Firebase } from '../../contexts/Firebase'
import { type FieldValues, useForm } from 'react-hook-form'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as P from '../../styled/PublicComponents.styled'
import { Button, TextField } from '@mui/material'
import { signUpFileds } from '../../constants/fileds'
import { SIGNIN_ROUTE } from '../../constants/routesNames'
import { type IFileds } from '../../types'
import { useContext } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'

const SignUp: React.FC = () => {
  const { auth } = useContext(Firebase)
  const {
    register,
    formState: { errors },
    // setError,
    handleSubmit
  } = useForm()

  const signUp = async ({ displayName, email, password }: FieldValues) => {
    console.log(displayName, email, password)

    // try {
    //   const { user } = auth.createUserWithEmailAndPassword(email, password)
    //   if (user) {
    //     await user
    //       .updateProfile({ displayName })
    //       .then(() => {
    //         // signInWithEmailAndPassword(auth, email, password).catch(error => alert(error))
    //       })
    //       .catch((error: any) => alert(error))
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({
        displayName: displayName,
      });
    } catch (error) {
      console.error(error);
    }


    // createUserWithEmailAndPassword(auth, email, password).catch(err => {
    //   const jsonError = JSON.stringify(err)
    //   const code = JSON.parse(jsonError).code

    //   if (code.includes('password') != null) {
    //     setError('password', {
    //       message: 'Incorrect password'
    //     })
    //   }

    //   if (code.includes('requests') != null) {
    //     setError('email', {
    //       message: 'Too many login attempts'
    //     })
    //   }

    //   if (code.includes('found') != null) {
    //     setError('email', {
    //       message: 'Not found this user'
    //     })
    //   }
    // })
  }

  return (
    <P.Form onSubmit={handleSubmit(signUp)}>
      <P.Title style={{ marginBottom: 4 }}>Sign Up</P.Title>
      <P.SubTitle style={{ marginBottom: 16 }}>Create your account</P.SubTitle>
      {signUpFileds.map(({ name, placeholder, type, options }: IFileds) => {
        return (
          <TextField
            key={name}
            error={Boolean(errors[name])}
            placeholder={placeholder}
            type={type}
            style={{ marginBottom: 12 }}
            helperText={errors[name]?.message?.toString()}
            {...register(name, options)}
          />
        )
      })}
      <Button
        style={{ marginTop: 8, marginBottom: 20 }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Create account
      </Button>
      <P.SubTitle>
        {'Do have an account? '}
        <P.RouteLink to={SIGNIN_ROUTE}>Login</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignUp }
