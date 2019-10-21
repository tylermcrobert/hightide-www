import React, { memo, useState, useEffect, createContext } from 'react'
import { Wrap } from 'style'
import { client } from 'pages/_app'

import ProductGrid from './ProductGrid'
import Cart from './Cart'

export const StoreContext = createContext()

const Store = memo(({ products }) => {
  const [checkoutID, setCheckoutId] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    client.checkout.create().then(checkout => {
      setCheckoutId(checkout.id)
    })
  }, [])

  const addProductToCart = product => {
    const lineItemsToAdd = {
      variantId: product.id,
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
    <StoreContext.Provider
      value={{ products, cart, checkoutID, addProductToCart }}
    >
      <Wrap>
        <ProductGrid />
        <Cart />
      </Wrap>
    </StoreContext.Provider>
  )
})

// Store.propTypes = {}

export default Store
