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
  const { addProductToCart } = useContext(StoreContext)
  const [variationIndex, setVariationIndex] = useState(0)
  const selectedProduct = product.variants[variationIndex]

  return (
    <Styled.Product key={product.id}>
      <img src={selectedProduct.image.src} alt={product.title} />

      <Styled.Description>
        <h2>{product.title}</h2>

        {product.variants.length > 1 && (
          <Styled.SizeWrapper>
            {product.variants.map((variant, i) => (
              <Styled.Size
                as="button"
                onClick={() => (variant.available ? setVariationIndex(i) : {})}
                selected={i === variationIndex}
                key={variant.title}
                available={variant.available}
              >
                {variant.title}
              </Styled.Size>
            ))}
          </Styled.SizeWrapper>
        )}
        <p>{product.description}</p>

        <h5>${selectedProduct.price} USD</h5>

        <Button type="button" onClick={() => addProductToCart(selectedProduct)}>
          Add to cart
        </Button>
      </Styled.Description>
    </Styled.Product>
  )
}

export default ProductGrid
