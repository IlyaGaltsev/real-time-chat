import { Route, Routes } from 'react-router-dom'
import { Admin } from '../layouts/Admin'
import { privateRoutes } from '../router'

const NavigatorPrivate = () => {
  return (
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
  )
}

export default NavigatorPrivate
