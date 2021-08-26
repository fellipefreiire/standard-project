import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export const useTheme = () => {
  const value = useContext(ThemeContext)

  return value
}
