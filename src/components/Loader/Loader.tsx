import * as P from '../../styled/PublicComponents.styled'
import { CircularProgress } from '@mui/material'

interface iLoader {
  background?: string
}

const Loader = ({ background }: iLoader) => {
  return (
    <P.CenterBox background={background}>
      <CircularProgress />
    </P.CenterBox>
  )
}

export { Loader }
