import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { CustomThemeProvider } from '../contexts/theme'
import { parseCookies } from 'nookies'

// @ts-ignore
const MyApp = ({ Component, pageProps, userTheme }: AppProps) => {
  return (
    <CustomThemeProvider userTheme={userTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </CustomThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  let previousTheme = null

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (ctx.req) {
    previousTheme = parseCookies(ctx)
  }

  const userTheme = previousTheme['USER_THEME']

  return {
    pageProps,
    userTheme
  }
}

export default MyApp
