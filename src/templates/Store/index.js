/**
 * TODO
 *
 * - Add cookie or localstorage for session
 *
 */

import React, { memo, useState, useEffect, createContext } from 'react'
import { Wrap } from 'style'
import { client } from 'pages/_app'

import ProductGrid from './ProductGrid'
import Cart from './Cart'

export const StoreContext = createContext()

function getCookie(name) {
  const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)
  return v ? v[2] : null
}

const Store = memo(({ products }) => {
  const [checkout, setCheckout] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const existingCheckout = getCookie('checkoutID')

    if (existingCheckout) {
      client.checkout.fetch(existingCheckout).then(res => {
        setCheckout(res)
        setCart(res.lineItems)
      })
    } else {
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
      customAttributes: {
        key: 'MyKey',
        value: 'MyValue',
      },
    }

    client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(data => {
      setCart(data.lineItems)
    })
  }

  return (
    <StoreContext.Provider value={{ products, cart, addProductToCart }}>
      <Wrap>
        <ProductGrid />
        <Cart />
      </Wrap>
    </StoreContext.Provider>
  )
})

// Store.propTypes = {}

export default Store
