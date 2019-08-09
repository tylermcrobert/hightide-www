import React from 'react'
import { ThemeProvider } from 'styled-components'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyle from '../../style/GlobalStyle'
import theme from '../../style/theme'

function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <main>{children}</main>
      {/* Maintain black footer regardless of theme change */}
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

// Layout.propTypes = {}

export default Layout
