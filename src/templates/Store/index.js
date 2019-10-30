/**
 * TODO
 *
 * - Add cookie or localstorage for session
 * - Get cart on server
 *
 */

import React, { memo, useState, useEffect, createContext } from 'react'
import { Wrap } from 'style'
import { client } from 'pages/_app'

import getCookie from 'util/getCookie'
import ProductGrid from './ProductGrid'
import Cart from './Cart'

export const StoreContext = createContext()

const Store = memo(({ products }) => {
  const [checkout, setCheckout] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const existingCheckout = getCookie('checkoutID')

    if (existingCheckout) {
      /* Use existing cart */

      client.checkout.fetch(existingCheckout).then(res => {
        setCheckout(res)
        setCart(res.lineItems)
      })
    } else {
      /* Create new cart */

      client.checkout.create().then(res => {
        document.cookie = `checkoutID=${res.id}`
        setCheckout(res)
      })
    }
  }, [])

  const addProductToCart = product => {
    const lineItemsToAdd = {
      variantId: product.id,
      quantity: 1,
    }

    client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(data => {
      setCart(data.lineItems)
    })
  }

  return (
    <StoreContext.Provider
      value={{ checkout, products, cart, addProductToCart }}
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
