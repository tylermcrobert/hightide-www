import React, { useContext } from 'react'
import { StoreCtx } from 'components/StoreProvider'
import Section from 'components/Section'
import Button from 'components/Button'
import pad from 'util/pad'
import styled from 'styled-components'
import Styled from './Styled'

// import PropTypes from 'prop-types'
//
function Cart() {
  const { checkout } = useContext(StoreCtx)
  const cart = checkout.lineItems

  if (cart.length) {
    return (
      <Styled.Cart>
        <h2>Cart</h2>

        <div>
          <div>
            <Header>
              <div>Item</div>
              <div>Price</div>
              <div>Qty</div>
            </Header>
            {cart.map((item, i) => (
              <CartItem data={item} key={`${item.title}${i}`} />
            ))}
          </div>
          <CheckoutBottom />
        </div>
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
  const { checkout } = useContext(StoreCtx)

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
  const { removeItem, updateItem } = useContext(StoreCtx)

  const removeOne = () => updateItem(data.id, data.quantity - 1)

  const addOne = () => updateItem(data.id, data.quantity + 1)

  const removeAll = () => removeItem(data.id)

  return (
    <Styled.ItemWrapper key={data.title}>
      <ItemWrapper>
        <div>
          {/* <img src={data.variant.image.src} alt="" /> */}
          <div>{data.title}</div>
          <Styled.Secondary>
            <h6>{data.variant.title.toUpperCase()}</h6>
          </Styled.Secondary>
        </div>
        <div>${data.variant.price}</div>
        <div>
          <>
            <span onClick={removeOne}>-</span> {pad(data.quantity)}{' '}
            <span onClick={addOne}>+</span>
          </>
        </div>
      </ItemWrapper>
    </Styled.ItemWrapper>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-gap: 1rem;
`

const Header = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding-bottom: 0.5rem;
`

const ItemWrapper = styled(Grid)`
  padding: 1rem 0;
`

export default Cart
