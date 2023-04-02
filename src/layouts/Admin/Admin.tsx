import { Sidebar } from '../../components/Sidebar'
import * as S from './Admin.styled'

interface ILayoutProp {
  children: React.ReactNode
}

const Admin = ({ children }: ILayoutProp) => {
  return (
    <S.Wrapper>
      <Sidebar/>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
export { Admin }
