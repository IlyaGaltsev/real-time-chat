// import * as S from 'SignUp.styled.ts'
import React from 'react'
import { Firebase } from '../../contexts/Firebase'
import { type FieldValues, useForm } from 'react-hook-form'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as P from '../../styled/PublicComponents.styled'
import { signUpFileds } from '../../constants/fileds'
import { SIGNIN_ROUTE } from '../../constants/routesNames'
import { type IFileds } from '../../types'
import { useContext } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'

const SignUp: React.FC = () => {
  const { auth, firestore } = useContext(Firebase)
  const {
    register,
    formState: { errors },
    // setError,
    handleSubmit
  } = useForm()

  const addUserToFirestore = (userData: any) => {
    firestore
      .collection('users')
      .add(userData)
      .then((docRef: { id: any }) => {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch((error: any) => {
        console.error('Error adding document: ', error)
      })
  }

  const signUp = async ({ displayName, email, password }: FieldValues) => {
    console.log(displayName, email, password)

    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await auth.currentUser.updateProfile({
        displayName: displayName
      })
      const userData = {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        photoUrl: auth.currentUser.photoURL
      }
      await addUserToFirestore(userData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <P.Form onSubmit={handleSubmit(signUp)}>
      <P.Title style={{ marginBottom: 4 }}>Sign Up</P.Title>
      <P.SubTitle style={{ marginBottom: 16 }}>Create your account</P.SubTitle>
      {signUpFileds.map(({ name, placeholder, type, options }: IFileds) => {
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
        Create account
      </P.PrimaryButton>
      <P.SubTitle>
        {'Do have an account? '}
        <P.RouteLink to={SIGNIN_ROUTE}>Login</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignUp }
