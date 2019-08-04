import React from 'react'
import Nav from 'components/Nav'
// import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <>
      <Nav />
      <hr />
      <main>{children}</main>
      <hr />
      Footer
    </>
  )
}

// Layout.propTypes = {}

export default Layout
