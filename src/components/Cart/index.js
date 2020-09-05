import React, { useContext } from 'react'
import { StoreCtx } from 'components/StoreProvider'
import Section from 'components/Section'

import Styled from './Styled'
import Checkout from './Checkout'
import LineItems from './LineItems'

function Cart() {
  const { checkout, setCartOpen, isCartOpen } = useContext(StoreCtx)
  const cart = checkout.lineItems
  const closeCart = () => setCartOpen(false)

  return (
    <Styled.Cart isOpen={isCartOpen}>
      <Styled.CartHeader>
        <h2>Cart</h2>
        <Styled.CloseButton onClick={closeCart}></Styled.CloseButton>
      </Styled.CartHeader>

      {cart.length ? (
        <>
          <LineItems />
          <Checkout />
        </>
      ) : (
        <Section>
          <p>There are no items in your cart.</p>
        </Section>
      )}
    </Styled.Cart>
  )
}

export default Cart
