import React, { memo, useState, useEffect } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import { client } from 'pages/_app'

const Store = memo(({ products }) => {
  const [checkoutID, setCheckoutId] = useState(null)

  useEffect(() => {
    client.checkout.create().then(checkout => {
      setCheckoutId(checkout.id)
    })
  }, [])

  const addItem = product => {
    const lineItemsToAdd = {
      variantId: product.variants[0].id,
      quantity: 1,
    }

    client.checkout.addLineItems(checkoutID, lineItemsToAdd).then(checkout => {
      // Do something with the updated checkout
      console.log(checkout.lineItems) // Array with one additional line item
    })
  }

  return (
    <Section>
      <Wrap>
        {products.map(product => {
          return (
            <div key={product.id}>
              <img src={product.images[0].src} alt={product.title} />
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              {checkoutID && (
                <button onClick={() => addItem(product)}>Add to cart</button>
              )}
            </div>
          )
        })}
      </Wrap>
    </Section>
  )
})

// Store.propTypes = {}

export default Store
