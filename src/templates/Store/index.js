import React, { memo, useState, useEffect } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import { client } from 'pages/_app'
import Styled from './Styled'

const Store = memo(({ products }) => {
  const [checkoutID, setCheckoutId] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    client.checkout.create().then(checkout => {
      setCheckoutId(checkout.id)
    })
  }, [])

  const addItem = product => {
    const lineItemsToAdd = {
      variantId: product.variants[0].id,
      quantity: 1,
      customAttributes: {
        key: 'MyKey',
        value: 'MyValue',
      },
    }

    client.checkout.addLineItems(checkoutID, lineItemsToAdd).then(data => {
      setCart(data.lineItems)
    })
  }

  return (
    <Wrap>
      <Section>
        <Styled.ProductWrapper>
          {products.map(product => {
            return (
              <div key={product.id}>
                <img src={product.images[0].src} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Styled.SizeWrapper>
                  {product.variants.map(variant => (
                    <Styled.Size key={variant.title}>
                      {variant.title}
                    </Styled.Size>
                  ))}
                </Styled.SizeWrapper>
                {checkoutID && (
                  <button onClick={() => addItem(product)}>Add to cart</button>
                )}
              </div>
            )
          })}
        </Styled.ProductWrapper>
      </Section>
      <Section>
        cart
        {cart.map(item => (
          <Styled.ItemWrapper key={item.title}>
            <h2>{item.title}</h2>
            <div>
              <h5>QTY: {item.quantity}</h5>
              <h5>size: MD</h5>
            </div>
          </Styled.ItemWrapper>
        ))}
      </Section>
    </Wrap>
  )
})

// Store.propTypes = {}

export default Store
