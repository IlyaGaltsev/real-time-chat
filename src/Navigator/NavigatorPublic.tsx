import { Route, Routes } from 'react-router-dom'
import { Default } from '../layouts/Default'
import { publicRoutes } from '../router'

const NavigatorPublic = () => {
  return (
    <Default>
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
    </Default>
  )
}

export default NavigatorPublic
