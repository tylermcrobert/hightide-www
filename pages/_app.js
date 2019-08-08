import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../style/theme'

export default class HighTideApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
