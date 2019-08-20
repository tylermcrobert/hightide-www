import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PageTransition } from 'next-page-transitions'

import theme, { invertedTheme } from '../style/theme'
import Layout from '../components/Layout'
import checkMeta from '../util/checkMeta'

const AmericaLtWoff2 = '/static/fonts/GT-America-Standard-Light.woff2'
const AmericaLtWoff = '/static/fonts/GT-America-Standard-Light.woff'
const AmericaLtTtf = '/static/fonts/GT-America-Standard-Light.ttf'

const AmericaMdWoff2 = '/static/fonts/GT-America-Standard-Medium.woff2'
const AmericaMdWoff = '/static/fonts/GT-America-Standard-Medium.woff'
const AmericaMdTtf = '/static/fonts/GT-America-Standard-Medium.ttf'

const LyonLtWoff = '/static/fonts/LyonDisplay-Light-Web.woff'
const LyonLtWoff2 = '/static/fonts/LyonDisplay-Light-Web.woff2'

/* eslint import/no-named-as-default-member: 0 */

const DARK_ROUTES = ['/work']

const { duration } = theme.routeTransition
const { accel, decel } = theme.ease

export default class HighTideApp extends App {
  componentDidMount() {
    checkMeta()
  }

  componentDidUpdate() {
    checkMeta()
  }

  render() {
    const { Component, pageProps } = this.props
    const isDark = DARK_ROUTES.includes(this.props.router.route)

    return (
      <Container>
        <ThemeProvider theme={isDark ? invertedTheme : theme}>
          <Layout>
            <PageTransition
              monkeyPatchScrolling
              timeout={theme.routeTransition.timeout}
              classNames="page-transition"
            >
              <Component {...pageProps} />
            </PageTransition>
          </Layout>
        </ThemeProvider>
        <style jsx global>
          {`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity ${duration}ms ${accel};
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity ${duration}ms ${decel};
            }

            @font-face {
              font-family: 'America';
              src: url(${AmericaLtWoff2}) format('woff2'),
                url(${AmericaLtWoff}) format('woff'),
                url(${AmericaLtTtf}) format('ttf');
              font-weight: 300;
              font-display: swap;
            }

            @font-face {
              font-family: 'America';
              src: url(${AmericaMdWoff2}) format('woff2'),
                url(${AmericaMdWoff}) format('woff'),
                url(${AmericaMdTtf}) format('ttf');
              font-weight: 500;
              font-display: swap;
            }

            @font-face {
              font-family: 'Lyon';
              src: url(${LyonLtWoff2}) format('woff2'),
                url(${LyonLtWoff}) format('woff');
              font-weight: 300;
              font-display: fallback;
            }
          `}
        </style>
      </Container>
    )
  }
}
