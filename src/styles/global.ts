import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75% // 15px
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5% // 14px
    }
  }

  body {
    transition: all 0.5s ease;
    background: ${props => props.theme.colors.background};
  }

  body, input, textarea, button {
    font: 500 1rem Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    cursor: pointer;
  }
`
