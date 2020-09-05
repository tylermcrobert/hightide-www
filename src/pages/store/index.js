import { memo } from 'react'
import StoreTemplate from 'templates/Store'
import { client } from 'middleware/getShopifyCheckout'
import Meta from 'components/Meta'

const Store = memo(({ products }) => {
  return (
    <>
      <Meta title="Store" url="store" />
      <StoreTemplate products={products} />
    </>
  )
})

Store.getInitialProps = async () => {
  const products = await client.collection
    .fetchAllWithProducts()
    .then(collections => collections[0].products)

  return { products }
}
export default Store
