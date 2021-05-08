import { memo } from 'react'
import ProductTemplate from 'templates/Product/'
import { client } from 'middleware/getShopifyCheckout'
import Meta from 'components/Meta'

const Store = memo(({ product }) => {
  return (
    <>
      <Meta title={product.title} url={`/store/${product.handle}`} />
      <ProductTemplate data={product} />
    </>
  )
})

Store.getInitialProps = async ({ query }) => {
  const { handle } = query
  const product = await client.product.fetchByHandle(handle)
  return { product }
}

export default Store
