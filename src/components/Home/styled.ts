import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`

export const H1 = styled.h1``

export const Button = styled.button`
  padding: 0.5rem;
  border: 1px solid black;
  color: coral;
  background: transparent;
  font-size: ${props => props.theme.fontSizes.medium};
`
