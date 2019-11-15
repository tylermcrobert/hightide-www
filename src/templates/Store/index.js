import React, { createContext } from 'react'
import { Wrap } from 'style'
import AspectImage from 'components/AspectImage'
import Link from 'next/link'
import Heading from 'components/Heading'
import Section from 'components/Section'
import Styled from './Styled'

export const StoreContext = createContext()

function Store({ products }) {
  return (
    <Section>
      <Wrap>
        <Styled.ProductGrid>
          {products.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </Styled.ProductGrid>
      </Wrap>
    </Section>
  )
}

const Product = ({ product }) => {
  return (
    <Link href="/store/[handle]" as={`/store/${product.handle}/`}>
      <a>
        <div key={product.id}>
          {product.images[0] && (
            <AspectImage aspect={5 / 4}>
              <img src={product.images[0].src} alt={product.title} />
            </AspectImage>
          )}

          <Styled.ItemTitle>
            <Heading headingStyle={2} as="h2">
              {product.title}
            </Heading>
            <h5>${product.variants[0].price}</h5>
          </Styled.ItemTitle>
        </div>
      </a>
    </Link>
  )
}

// Store.propTypes = {}

export default Store
