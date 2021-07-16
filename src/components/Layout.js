import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyle from '../globalStyles'
import { theme } from '../utils/theme'

const Layout = ({ children, noVideo, isOurWorkDetail }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header noVideo={noVideo} isOurWorkDetail={isOurWorkDetail} />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
