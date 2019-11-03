// https://github.com/zeit/next.js/issues/3313#issuecomment-475337811
import App from 'next/app'
import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { PageTransition } from 'next-page-transitions'
import cookie from 'js-cookie'
import Fonts from 'style/Fonts'
import getShopifyCheckout from 'middleware/getShopifyCheckout'
import Layout from 'components/Layout'
import theme from 'style/theme'

import LogRocket from 'logrocket'

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

/* eslint import/no-named-as-default-member: 0 */

const DARK_ROUTES = ['/work']

export const AppCtx = createContext()

export default class HighTideApp extends App {
  state = {
    storeCount: 0,
  }

  updateStoreCount = count => {
    this.setState({ storeCount: count })
  }

  componentDidMount() {
    // set shopify checkout id
    cookie.set('shopifyCheckoutId', atob(this.props.checkout.id))
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

    return (
      <>
        <ThemeProvider theme={{ ...theme, isDark }}>
          <AppCtx.Provider
            value={{
              storeCount: this.state.storeCount,
              updateStoreCount: this.updateStoreCount,
            }}
          >
            <Layout>
              <PageTransition
                timeout={theme.routeTransition.timeout}
                classNames="page-transition"
              >
                <Component {...pageProps} key={asPath} />
              </PageTransition>
            </Layout>
          </AppCtx.Provider>
        </ThemeProvider>
        <Fonts />
      </>
    )
  }
}
