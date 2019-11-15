import { memo } from 'react'
import StoreTemplate from 'templates/Store'
import { client } from 'middleware/getShopifyCheckout'

const Store = memo(({ products }) => {
  console.log({ products })
  return <StoreTemplate products={products} />
})

Store.getInitialProps = async () => {
  const products = await client.product.fetchAll()

  return { products }
}
export default Store
