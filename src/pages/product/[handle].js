import { memo } from 'react'
import ProductTemplate from 'templates/Product/'
import { client } from '../store'

const Store = memo(({ product }) => {
  return <ProductTemplate data={product} />
})

Store.getInitialProps = async ({ query }) => {
  const { handle } = query
  const product = await client.product.fetchByHandle(handle)
  return { product }
}

export default Store
