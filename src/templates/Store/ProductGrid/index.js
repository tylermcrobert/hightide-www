/**
 * TODO:
 * - Add Message like "All 5 Tote Bag are in your cart."
 */

import React, { useContext } from 'react'

import AspectImage from 'components/AspectImage'
import Styled from './Styled'
import { StoreContext } from '..'

function ProductGrid() {
  const { products } = useContext(StoreContext)
  return (
    <Styled.ProductGrid>
      {products.map(product => {
        return <Product product={product} key={product.id} />
      })}
    </Styled.ProductGrid>
  )
}

const Product = ({ product }) => {
  return (
    <a href={`/product/${product.handle}/`}>
      <div key={product.id}>
        {product.images[0] && (
          <AspectImage src={product.images[0].src} alt={product.title} />
        )}

        <div>
          <h2>{product.title}</h2>
          <h5>{product.variants[0].price}</h5>
        </div>
      </div>
    </a>
  )
}

export default ProductGrid
