import React from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'

function Store({ products }) {
  return (
    <Section>
      <Wrap>
        {products.map(product => {
          return (
            <div>
              <img src={product.images[0].src} alt={product.title} />
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <button>Add to cart</button>
            </div>
          )
        })}
      </Wrap>
    </Section>
  )
}

// Store.propTypes = {}

export default Store
