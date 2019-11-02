import React, {
  memo,
  createContext,
  useEffect,
  useState,
  useContext,
} from 'react'
import { Wrap } from 'style'
import { AppCtx } from 'pages/_app'

import ProductGrid from './ProductGrid'
import Cart from './Cart'

export const StoreContext = createContext()

const Store = memo(({ products, checkout: initialCheckout, client }) => {
  const [checkout, setCheckout] = useState(initialCheckout)
  const { updateStoreCount } = useContext(AppCtx)

  // update store count
  useEffect(() => {
    if (updateStoreCount) {
      updateStoreCount(checkout.lineItems.length)
    }
  }, [checkout, updateStoreCount])

  // use checkout id from initial checkout id
  const checkoutId = initialCheckout.id

  // set cookie
  useEffect(() => {
    document.cookie = `checkoutId=${checkoutId}; path=/`
  }, [checkoutId])

  //
  const addProductToCart = (product, qty = 1) =>
    client.checkout
      .addLineItems(checkoutId, {
        variantId: product.id,
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
    <StoreContext.Provider
      value={{
        checkout,
        products,
        removeItem,
        updateItem,
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
