import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import classnames from 'classnames'

import { rem } from '../utils/mixins'

import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyle from '../globalStyles'
import { theme } from '../utils/theme'

const PageContainer = styled.div`
  background: linear-gradient(90deg, ${props => props.theme.background.red} 0%, ${props => props.theme.background.blue} 100%);

  &.blueGreen {
    background: linear-gradient(90deg, ${props => props.theme.background.blue} 0%, ${props => props.theme.background.green} 100%);
  }
`

const Layout = ({ children, background }) => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer className={classnames(background)}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
