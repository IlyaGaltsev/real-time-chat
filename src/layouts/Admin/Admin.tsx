// import { Sidebar } from '../../components/Sidebar'
import * as S from './Admin.styled'

interface ILayoutProp {
  children: React.ReactNode
}

const Admin = ({ children }: ILayoutProp) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
export { Admin }
