/**
 * TODO
 *
 * - Add cookie or localstorage for session
 * - Get cart on server
 *
 */

import React, { memo, createContext, useEffect, useState } from 'react'
import { Wrap } from 'style'

import ProductGrid from './ProductGrid'
import Cart from './Cart'

export const StoreContext = createContext()

const Store = memo(({ products, checkout: initialCheckout, client }) => {
  const [checkout, setCheckout] = useState(initialCheckout)

  const checkoutID = initialCheckout.id

  useEffect(() => {
    document.cookie = `checkoutID=${checkoutID}; path=/`
  }, [checkoutID])

  const addProductToCart = (product, qty = 1) => {
    client.checkout
      .addLineItems(checkoutID, {
        variantId: product.id,
        quantity: qty,
      })
      .then(newCheckout => {
        setCheckout(newCheckout)
      })
  }

  const updateLineItem = (id, qty) => {
    const lineItems = [
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkyMjM3MDk0MDk3Ng==',
        quantity: 1,
      },
    ]

    client.checkout.updateLineItems(checkoutID, lineItems).then(newCheckout => {
      setCheckout(newCheckout)
    })
  }

  const removeItem = itemId => {
    client.checkout.removeLineItems(checkoutID, [itemId]).then(newCheckout => {
      console.log(newCheckout)
    })
  }

  return (
    <StoreContext.Provider
      value={{
        checkout,
        products,
        removeItem,
        updateLineItem,
        addProductToCart,
      }}
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
