import React from 'react'
import * as S from './styled'
import { useTheme } from '../../hooks/useTheme'

export const Home: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <S.Home>
      <S.H1>Hello World</S.H1>
      <S.Button onClick={toggleTheme}>Toggle theme</S.Button>
    </S.Home>
  )
}
