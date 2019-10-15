import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'style/GlobalStyle'
import theme from 'style/theme'
import Nav from '../Nav'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.prismic = {
          endpoint: 'https://hightidesite.cdn.prismic.io/api/v2'
        };
      `,
        }}
      />
      <script
        type="text/javascript"
        src="https://static.cdn.prismic.io/prismic.min.js"
      />
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
