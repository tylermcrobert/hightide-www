import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyle from '../../style/GlobalStyle'

function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

// Layout.propTypes = {}

export default Layout
