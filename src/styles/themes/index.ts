import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

const defaultTheme = {
  fontSizes: {
    small: '1rem',
    medium: '1.125rem',
    large: '1.25rem'
  }
}

const combineTheme = (theme: CustomTheme): DefaultTheme => {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }
