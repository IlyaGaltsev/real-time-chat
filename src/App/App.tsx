import { Firebase } from '../contexts/Firebase'
import React, { useContext, useLayoutEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes } from '../router'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../layouts/Admin'
// import { Loader } from '../components/Loader'

const App: React.FC = () => {
  const { auth } = useContext(Firebase)
  const [user, loading] = useAuthState(auth)

  useLayoutEffect(() => {
    console.log('user:', user)
  }, [user])

  if (loading) {
    return <p>LOOOOOOADING....</p>
  } else {
    return (
      <>
        {user != null ? (
          <Admin>
            <Routes>
              {privateRoutes.map(({ path, Component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={Component}
                  />
                )
              })}
            </Routes>
          </Admin>
        ) : (
          <Routes>
            {publicRoutes.map(({ path, Component }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={Component}
                />
              )
            })}
          </Routes>
        )}
      </>
    )
  }
}

export { App }
