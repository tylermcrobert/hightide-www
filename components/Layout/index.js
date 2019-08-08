import React from 'react'
import { ThemeProvider } from 'styled-components'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyle from '../../style/GlobalStyle'
import theme from '../../style/theme'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Nav />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}

// Layout.propTypes = {}

export default Layout
