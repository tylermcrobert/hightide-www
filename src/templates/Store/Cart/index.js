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
  const { cart, checkout } = useContext(StoreContext)

  if (cart.length) {
    return (
      <Styled.Cart>
        <Section>
          <p>Cart</p>
          {cart.length ? (
            <Styled.CheckoutWrapper>
              <div>
                {cart.map(item => (
                  <CartItem data={item} />
                ))}
              </div>
              <CheckoutBottom />
            </Styled.CheckoutWrapper>
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
      <Styled.CheckoutBottom>
        <div>Subtotal</div>
        <Styled.TotalWrapper>
          <h2>${checkout.paymentDue}</h2>
          <div>USD</div>
        </Styled.TotalWrapper>
        <Button type="button">Check Out</Button>

        <h6>Taxes, shipping, and discount codes calculated at checkout</h6>
      </Styled.CheckoutBottom>
    </div>
  )
}

const CartItem = ({ data }) => {
  return (
    <Styled.ItemWrapper key={data.title}>
      <img src={data.variant.image.src} alt="" />

      <Styled.Detail>
        <div>
          <Styled.Title>{data.title}</Styled.Title>
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
