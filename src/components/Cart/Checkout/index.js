import React, { useContext } from 'react'

import { StoreCtx } from 'components/StoreProvider'
import GlobalStyled from '../Styled'
import Styled from './Styled'

const Checkout = () => {
  const { checkout } = useContext(StoreCtx)

  return (
    <div>
      <div>Subtotal</div>
      <Styled.SubtotalWrapper>
        <h2>${checkout.paymentDue}</h2>
        <div>USD</div>
      </Styled.SubtotalWrapper>
      <a href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
        <Styled.CheckoutButton type="button">Check Out</Styled.CheckoutButton>
      </a>
      <GlobalStyled.FinePrint>
        Taxes, shipping, and discount codes calculated at checkout
      </GlobalStyled.FinePrint>
    </div>
  )
}
// Checkout.propTypes = {}

export default Checkout
