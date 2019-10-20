import { memo } from 'react'
import StoreTemplate from 'templates/Store'
import { client } from './_app'

const Store = memo(({ products }) => {
  return <StoreTemplate products={products} />
})

Store.getInitialProps = async () => {
  const products = await client.product.fetchAll()

  return { products }
}

export default Store
