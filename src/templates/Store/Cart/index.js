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
        cart.map(item => (
          <Styled.ItemWrapper key={item.title}>
            <img src={item.variant.image.src} alt="" />

            <div>
              <Styled.Title>{item.title}</Styled.Title>
              <h5>{item.variant.title}</h5>
            </div>

            <div>
              <h5>QTY: {item.quantity}</h5>
            </div>
          </Styled.ItemWrapper>
        ))
      ) : (
        <h2>There are no items in your cart.</h2>
      )}
    </Section>
  )
}

export default Cart
