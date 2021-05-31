import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'

import GlobalStyle from '../globalStyles'
import { theme } from '../utils/theme'

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default Layout
