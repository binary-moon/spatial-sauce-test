import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../globalStyles'
import { theme } from '../utils/theme'

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
