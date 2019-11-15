import React, { createContext } from 'react'
import { Wrap } from 'style'
import AspectImage from 'components/AspectImage'
import Styled from './Styled'

export const StoreContext = createContext()

function Store({ products }) {
  return (
    <Wrap>
      <Styled.ProductGrid>
        {products.map(product => {
          return <Product product={product} key={product.id} />
        })}
      </Styled.ProductGrid>
    </Wrap>
  )
}

const Product = ({ product }) => {
  return (
    <a href={`/store/${product.handle}/`}>
      <div key={product.id}>
        {product.images[0] && (
          <AspectImage src={product.images[0].src} alt={product.title} />
        )}

        <Styled.ItemTitle>
          <h2>{product.title}</h2>
          <h5>${product.variants[0].price}</h5>
        </Styled.ItemTitle>
      </div>
    </a>
  )
}

// Store.propTypes = {}

export default Store
