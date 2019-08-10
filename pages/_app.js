import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme, { invertedTheme } from '../style/theme'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import config from '../site.config'

import AmericaLtWoff2 from '../assets/fonts/GT-America-Standard-Light.woff2'
import AmericaLtWoff from '../assets/fonts/GT-America-Standard-Light.woff'
import AmericaLtTtf from '../assets/fonts/GT-America-Standard-Light.ttf'

import AmericaMdWoff2 from '../assets/fonts/GT-America-Standard-Medium.woff2'
import AmericaMdWoff from '../assets/fonts/GT-America-Standard-Medium.woff'
import AmericaMdTtf from '../assets/fonts/GT-America-Standard-Medium.ttf'

import LyonLtWoff from '../assets/fonts/LyonDisplay-Light-Web.woff'
import LyonLtWoff2 from '../assets/fonts/LyonDisplay-Light-Web.woff2'

/* eslint import/no-named-as-default-member: 0 */

const DARK_ROUTES = ['/work']

export default class HighTideApp extends App {
  componentDidMount() {
    console.log('mounted')
  }

  render() {
    const { Component, pageProps } = this.props
    const isDark = this.props.router.route.indexOf(DARK_ROUTES) !== -1

    return (
      <Container>
        <Head>
          <title>{config.title}</title>
        </Head>
        <ThemeProvider theme={isDark ? invertedTheme : theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <style jsx>
          {`
            @font-face {
              font-family: 'America';
              src: url(${AmericaLtWoff2}) format('woff2'),
                url(${AmericaLtWoff}) format('woff'),
                url(${AmericaLtTtf}) format('ttf');
              font-weight: 300;
            }

            @font-face {
              font-family: 'America';
              src: url(${AmericaMdWoff2}) format('woff2'),
                url(${AmericaMdWoff}) format('woff'),
                url(${AmericaMdTtf}) format('ttf');
              font-weight: 500;
            }

            @font-face {
              font-family: 'Lyon';
              src: url(${LyonLtWoff2}) format('woff2'),
                url(${LyonLtWoff}) format('woff');
              font-weight: 500;
            }
          `}
        </style>
      </Container>
    )
  }
}
