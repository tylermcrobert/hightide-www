/**
 * TODO:
 * - Add remove functionality
 * - Add Subtotal
 * - Remove  variants where they dont exist
 * - Allow for edit qty
 * - add checkout button
 * - "Last available item in this size and color"
 */

import React, { useContext } from 'react'
import Section from 'components/Section'
import Button from 'components/Button'
import Styled from './Styled'
import { StoreContext } from '..'

function Cart() {
  const { cart } = useContext(StoreContext)

  if (cart.length) {
    return (
      <Styled.Cart>
        <Section>
          <p>Cart</p>
          {cart.length ? (
            <div>
              <div>
                {cart.map(item => (
                  <CartItem data={item} />
                ))}
              </div>
              <CheckoutBottom />
            </div>
          ) : (
            <h2>There are no items in your cart.</h2>
          )}
        </Section>
      </Styled.Cart>
    )
  }
  return 'loading cart...'
}

const CheckoutBottom = () => {
  const { checkout } = useContext(StoreContext)

  return (
    <div>
      <div>
        <div>Subtotal</div>
        <div>
          <h2>${checkout.paymentDue}</h2>
          <div>USD</div>
        </div>
        <Button type="button">Check Out</Button>

        <p>Taxes, shipping, and discount codes calculated at checkout</p>
      </div>
    </div>
  )
}

const CartItem = ({ data }) => {
  return (
    <Styled.ItemWrapper key={data.title}>
      <img src={data.variant.image.src} alt="" />

      <Styled.Detail>
        <div>
          <h2>{data.title}</h2>
          <Styled.Secondary>
            <h6>{data.variant.title}</h6>
            <h6>remove</h6>
          </Styled.Secondary>
        </div>
        <div>
          <h2>- {data.quantity} +</h2>
        </div>
      </Styled.Detail>
    </Styled.ItemWrapper>
  )
}

export default Cart
