import React from 'react'
import Nav from 'components/Nav'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Nav />
        <main>{children}</main>
        Footer
      </>
    </ThemeProvider>
  )
}

// Layout.propTypes = {}

export default Layout
