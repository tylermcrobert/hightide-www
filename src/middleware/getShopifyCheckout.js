import cookies from 'next-cookies'
import Client from 'shopify-buy'
import btoa from 'btoa'
import fetch from 'isomorphic-unfetch'

export const client = Client.buildClient(
  {
    storefrontAccessToken: '9395d0399ded34d4a90d8e45db500a76',
    domain: 'hightidenyc.myshopify.com',
  },
  fetch
)

const isServer = !process.browser

const createCheckout = () => client.checkout.create()

const loadCheckout = encodedId => {
  return client.checkout
    .fetch(encodedId)
    .then(checkout => {
      // if checkout has been completed
      if (checkout.completedAt) {
        // return new checkout
        return createCheckout()
      }
      // otherwise return existing checkout
      return checkout
    })
    .catch(err => {
      console.log(err)
      return createCheckout()
    })
}

export default async function getShopifyCheckout(ctx) {
  const { shopifyCheckoutId } = cookies(ctx)

  const encodedId = btoa(shopifyCheckoutId)

  if (isServer) {
    if (shopifyCheckoutId) {
      return loadCheckout(encodedId)
    }
    return createCheckout()
  }

  return null
}
