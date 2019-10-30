import { memo } from 'react'
import StoreTemplate from 'templates/Store'
import cookies from 'next-cookies'
import Client from 'shopify-buy'

export const client = Client.buildClient({
  storefrontAccessToken: '9395d0399ded34d4a90d8e45db500a76',
  domain: 'hightidenyc.myshopify.com',
})

const Store = memo(({ products, checkout }) => {
  return (
    <StoreTemplate products={products} checkout={checkout} client={client} />
  )
})

const getCheckout = async prevCheckoutID => {
  if (prevCheckoutID) {
    return client.checkout.fetch(prevCheckoutID)
  }
  return client.checkout.create()
}

Store.getInitialProps = async ctx => {
  const { checkoutId } = cookies(ctx)

  const checkout = await getCheckout(checkoutId)
  const products = await client.product.fetchAll()

  return { products, checkout }
}

export default Store
