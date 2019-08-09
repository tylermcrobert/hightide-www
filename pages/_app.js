import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../style/theme'
import Layout from '../components/Layout'

export default class HighTideApp extends App {
  componentDidMount() {
    console.log('mounted')
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}
