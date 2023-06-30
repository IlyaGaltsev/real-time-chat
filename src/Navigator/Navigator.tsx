import NavigatorPrivate from './NavigatorPrivate'
import NavigatorPublic from './NavigatorPublic'

interface INavigator {
  isAuth: boolean
}

const Navigator = ({ isAuth }: INavigator) => {
  return isAuth ? <NavigatorPrivate /> : <NavigatorPublic />
}

export default Navigator
