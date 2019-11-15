import React, { useContext } from 'react'
import { StoreCtx } from 'components/StoreProvider'
import Section from 'components/Section'
import pad from 'util/pad'
import styled from 'styled-components'
import Styled from './Styled'
import Checkout from './Checkout'
// import PropTypes from 'prop-types'
//
function Cart() {
  const { checkout, setCartOpen, isCartOpen } = useContext(StoreCtx)
  const cart = checkout.lineItems

  return (
    <Styled.Cart isOpen={isCartOpen}>
      <h2>
        Cart <span onClick={() => setCartOpen(false)}>[x]</span>
      </h2>

      {cart.length ? (
        <>
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

const CartItem = ({ data }) => {
  const { removeItem, updateItem } = useContext(StoreCtx)

  const removeOne = () => updateItem(data.id, data.quantity - 1)

  const addOne = () => updateItem(data.id, data.quantity + 1)

  const removeAll = () => removeItem(data.id)

  return (
    <Styled.ItemWrapper key={data.title}>
      <ItemWrapper>
        <div>
          <ItemDescWrapper>
            <img src={data.variant.image.src} alt="" />
            <div>
              {data.title}
              <Styled.FinePrint>
                {data.variant.title.toUpperCase()}
              </Styled.FinePrint>
            </div>
          </ItemDescWrapper>
        </div>

        <div>${data.variant.price}</div>

        <div>
          <span onClick={removeOne}>-</span> {pad(data.quantity)}{' '}
          <span onClick={addOne}>+</span>
        </div>
      </ItemWrapper>
    </Styled.ItemWrapper>
  )
}

const ItemDescWrapper = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-gap: 1rem;
`
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
