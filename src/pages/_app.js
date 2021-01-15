// https://github.com/zeit/next.js/issues/3313#issuecomment-475337811
import App from 'next/app'
import React, { createContext, createRef } from 'react'
import { ThemeProvider } from 'styled-components'
import LogRocket from 'logrocket'
import { PageTransition } from 'next-page-transitions'
import cookie from 'js-cookie'
import Fonts from 'style/Fonts'
import getShopifyCheckout from 'middleware/getShopifyCheckout'
import { CursorProvider } from 'components/CursorHover'
import Layout from 'components/Layout'
import theme, { routeTransition } from 'style/theme'
import includeCredit from 'util/includeCredit'
import StoreProvider from 'components/StoreProvider'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

LogRocket.init('mto3as/high-tide')
const DARK_ROUTES = ['/work']

Sentry.init({
  dsn:
    'https://b0fcbe99705b4ebc88cf8884cab22ed0@o457454.ingest.sentry.io/5594616',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

export const AppCtx = createContext()
export const cachedCheckout = createRef()

export default class HighTideApp extends App {
  state = {
    storeCount: 0,
  }

  updateStoreCount = count => {
    this.setState({ storeCount: count })
  }

  componentDidMount() {
    includeCredit()

    if (this.props.checkout.id) {
      cachedCheckout.current = this.props.checkout
      cookie.set('shopifyCheckoutId', atob(cachedCheckout.current.id))
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const checkout = await getShopifyCheckout(ctx)
    return { pageProps, checkout }
  }

  render() {
    const { Component, pageProps } = this.props
    const { route, asPath } = this.props.router
    const isDark = DARK_ROUTES.indexOf(route) > -1

    const pathWithoutParams = asPath.split('?')[0]

    return (
      <>
        <ThemeProvider theme={{ ...theme, isDark }}>
          <StoreProvider
            checkout={this.props.checkout || cachedCheckout.current}
          >
            <Layout>
              <CursorProvider>
                <PageTransition
                  timeout={routeTransition.timeout}
                  classNames="page-transition"
                >
                  <Component {...pageProps} key={pathWithoutParams} />
                </PageTransition>
              </CursorProvider>
            </Layout>
          </StoreProvider>
        </ThemeProvider>
        <Fonts />
      </>
    )
  }
}

LogRocket.init('mto3as/high-tide')

async function loadPolyfills() {
  if (
    typeof window !== 'undefined' &&
    typeof window.IntersectionObserver === 'undefined'
  ) {
    await import('intersection-observer')
  }
}

loadPolyfills()
