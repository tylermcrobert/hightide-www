import { memo } from 'react'
import Client from 'shopify-buy'
import StoreTemplate from 'templates/Store'

const Store = memo(({ products }) => {
  return <StoreTemplate products={products} />
})

Store.getInitialProps = async () => {
  const client = Client.buildClient({
    storefrontAccessToken: '9395d0399ded34d4a90d8e45db500a76',
    domain: 'hightidenyc.myshopify.com',
  })

  const products = await client.product.fetchAll()

  return { products }
}

export default Store
