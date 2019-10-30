/**
 * TODO:
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
  const { checkout } = useContext(StoreContext)
  const cart = checkout.lineItems

  if (cart.length) {
    return (
      <Styled.Cart>
        <Section>
          <p>Cart</p>

          <div>
            <div>
              {cart.map((item, i) => (
                <CartItem data={item} key={`${item.title}${i}`} />
              ))}
            </div>
            <CheckoutBottom />
          </div>
        </Section>
      </Styled.Cart>
    )
  }
  return (
    <Section>
      <h2>There are no items in your cart.</h2>
    </Section>
  )
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
  const { removeItem, updateItem } = useContext(StoreContext)

  const removeOne = () => updateItem(data.id, data.quantity - 1)

  const addOne = () => updateItem(data.id, data.quantity + 1)

  const removeAll = () => removeItem(data.id)

  return (
    <Styled.ItemWrapper key={data.title}>
      <img src={data.variant.image.src} alt="" />

      <Styled.Detail>
        <div>
          <h2>{data.title}</h2>
          <Styled.Secondary>
            <h6>{data.variant.title}</h6>
            <h6 onClick={removeAll}>Remove</h6>
          </Styled.Secondary>
        </div>
        <div>
          <h2>
            <span onClick={removeOne}>-</span> {data.quantity}{' '}
            <span onClick={addOne}>+</span>
          </h2>
        </div>
      </Styled.Detail>
    </Styled.ItemWrapper>
  )
}

export default Cart
