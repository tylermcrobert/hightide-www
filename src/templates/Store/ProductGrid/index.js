/**
 * TODO:
 * - Add Message like "All 5 Tote Bag are in your cart."
 */

import React, { useContext, useState } from 'react'
import Button from 'components/Button'
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
  console.log()
  return (
    <a href={`/product/${product.handle}/`}>
      <Styled.Product key={product.id}>
        {product.images[0] && (
          <img src={product.images[0].src} alt={product.title} />
        )}

        <Styled.Description>
          <h2>{product.title}</h2>
          <h5>{product.variants[0].price}</h5>
        </Styled.Description>
      </Styled.Product>
    </a>
  )
}

export default ProductGrid
