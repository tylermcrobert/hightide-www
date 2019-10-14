// https://github.com/zeit/next.js/issues/3313#issuecomment-475337811
import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PageTransition } from 'next-page-transitions'

import theme from 'style/theme'
import Layout from 'components/Layout'

import LogRocket from 'logrocket'

LogRocket.init('mto3as/high-tide')

const AmericaLtWoff2 = '/static/fonts/GT-America-Standard-Light.woff2'
const AmericaLtWoff = '/static/fonts/GT-America-Standard-Light.woff'
const AmericaLtTtf = '/static/fonts/GT-America-Standard-Light.ttf'

const AmericaMdWoff2 = '/static/fonts/GT-America-Standard-Medium.woff2'
const AmericaMdWoff = '/static/fonts/GT-America-Standard-Medium.woff'
const AmericaMdTtf = '/static/fonts/GT-America-Standard-Medium.ttf'

const LyonLtWoff = '/static/fonts/LyonDisplay-Light-Web.woff'
const LyonLtWoff2 = '/static/fonts/LyonDisplay-Light-Web.woff2'

async function loadPolyfills() {
  if (
    typeof window !== 'undefined' &&
    typeof window.IntersectionObserver === 'undefined'
  ) {
    await import('intersection-observer')
  }
}

loadPolyfills()

/* eslint import/no-named-as-default-member: 0 */

const DARK_ROUTES = ['/work']

const { duration, distance } = theme.routeTransition
const { accel, decel } = theme.ease

export default class HighTideApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { route, asPath } = this.props.router
    const isDark = DARK_ROUTES.indexOf(route) > -1

    return (
      <>
        <ThemeProvider theme={{ ...theme, isDark }}>
          <Layout>
            <PageTransition
              timeout={theme.routeTransition.timeout}
              classNames="page-transition"
            >
              <Component {...pageProps} key={asPath} />
            </PageTransition>
          </Layout>
        </ThemeProvider>
        <style jsx global>
          {`
            .page-transition-exit {
              opacity: 0;
              transform: translateY(${distance}em);
              transition: ${duration}ms transform ${accel},
                ${duration}ms opacity ${accel};
            }
            .page-transition-exit-active {
              opacity: 0;
              transform: translateY(${distance}em);
              transition: ${duration}ms transform ${accel},
                ${duration}ms opacity ${accel};
            }
            .page-transition-enter {
              transform: translateY(${distance}em);
              opacity: 0;
            }
            .page-transition-enter-active {
              transform: translateY(${distance}em);
              transition: transform ${duration}ms ${decel},
                ${duration}ms opacity ${decel};
            }

            .page-transition-enter-done {
              transform: translateY(0);
              transition: ${duration}ms transform ${decel},
                ${duration}ms opacity ${decel};
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
      </>
    )
  }
}
