import * as S from './Default.styled'

interface ILayoutProp {
  children: React.ReactNode
}

const Default = ({ children }: ILayoutProp) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export { Default }
