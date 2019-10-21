/**
 * TODO:
 * - Add remove functionality
 * - Add Subtotal
 * - Remove  variants where they dont exist
 * - Allow for edit qty
 * - add checkout button
 */

import React, { useContext } from 'react'
import Section from 'components/Section'
import Styled from './Styled'
import { StoreContext } from '..'

function Cart() {
  const { cart } = useContext(StoreContext)

  return (
    <Section>
      cart
      {cart.length ? (
        <div>
          {cart.map(item => (
            <Styled.ItemWrapper key={item.title}>
              <img src={item.variant.image.src} alt="" />

              <div>
                <Styled.Title>{item.title}</Styled.Title>
                <h5>{item.variant.title}</h5>
              </div>
              <div>remove</div>

              <div>
                <h5>QTY: {item.quantity}</h5>
              </div>
            </Styled.ItemWrapper>
          ))}
          <div>Subtotal $666.00 USD </div>
          <div>Taxes and shipping calculated at checkout</div>
          <button type="button">Check Out</button>
        </div>
      ) : (
        <h2>There are no items in your cart.</h2>
      )}
    </Section>
  )
}

export default Cart
