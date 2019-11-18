import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { client } from 'middleware/getShopifyCheckout'

export const StoreCtx = createContext()
const StoreProvider = ({ children, checkout: initialCheckout }) => {
  const [checkout, setCheckout] = useState(initialCheckout)
  const [isCartOpen, setCartOpen] = useState(false)

  // use checkout id from initial checkout id
  const checkoutId = initialCheckout.id

  console.log(checkout.completedAt)

  const addItem = (variantId, qty = 1) =>
    client.checkout
      .addLineItems(checkoutId, {
        variantId,
        quantity: qty,
      })
      .then(newCheckout => setCheckout(newCheckout))

  // Remove item
  const removeItem = id =>
    client.checkout
      .removeLineItems(checkoutId, [id])
      .then(newCheckout => setCheckout(newCheckout))

  const updateItem = (id, quantity) =>
    client.checkout
      .updateLineItems(checkoutId, { id, quantity })
      .then(newCheckout => setCheckout(newCheckout))

  return (
    <StoreCtx.Provider
      value={{
        addItem,
        removeItem,
        updateItem,
        setCartOpen,
        isCartOpen,
        checkout,
        storeCount: checkout.lineItems.length,
      }}
    >
      {children}
    </StoreCtx.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.any.isRequired,
  checkout: PropTypes.object.isRequired,
}

export default StoreProvider
