import { createContext, useState } from 'react'
import {
  DefaultTheme,
  CustomThemeContext,
  ThemeProvider
} from 'styled-components'
import { combineTheme, light, dark } from '../styles/themes'
import { setCookie } from 'nookies'

export const ThemeContext = createContext<CustomThemeContext>(
  {} as CustomThemeContext
)

type CustomThemeProviderProps = {
  userTheme: string
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  userTheme
}) => {
  const selectedTheme = () => {
    if (userTheme) {
      const theme =
        userTheme === 'light' ? combineTheme(light) : combineTheme(dark)
      return theme
    }
    return combineTheme(light)
  }

  const [theme, setTheme] = useState<DefaultTheme>(selectedTheme)

  const toggleTheme = () => {
    if (theme.title === 'light') {
      setTheme(combineTheme(dark))
      setCookie(null, 'USER_THEME', 'dark', {
        maxAge: 10 * 365 * 24 * 60 * 60, // 10 years
        path: '/'
      })
    } else {
      setTheme(combineTheme(light))
      setCookie(null, 'USER_THEME', 'light', {
        maxAge: 24 * 60 * 60,
        path: '/'
      })
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
