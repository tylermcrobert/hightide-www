import cookies from 'next-cookies'
import Client from 'shopify-buy'
import btoa from 'btoa'

export const client = Client.buildClient({
  storefrontAccessToken: '9395d0399ded34d4a90d8e45db500a76',
  domain: 'hightidenyc.myshopify.com',
})

export default async function getShopifyCheckout(ctx) {
  const { shopifyCheckoutId } = cookies(ctx)

  if (shopifyCheckoutId && shopifyCheckoutId !== '') {
    return client.checkout.fetch(btoa(shopifyCheckoutId)).catch(err => {
      console.error(err)
    })
  }

  return client.checkout.create()
}
