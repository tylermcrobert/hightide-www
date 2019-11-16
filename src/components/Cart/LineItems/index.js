import React, { useContext } from 'react'
import { StoreCtx } from 'components/StoreProvider'
import pad from 'util/pad'
import Styled from './Styled'
import GlobalStyled from '../Styled'

const LineItems = () => {
  const { checkout } = useContext(StoreCtx)

  return (
    <Styled.LineItems>
      <Styled.LineItemHeader>
        <div>Item</div>
        <div>Price</div>
        <div>Qty</div>
      </Styled.LineItemHeader>
      {checkout.lineItems.map((item, i) => (
        <CartItem data={item} key={`${item.title}${i}`} />
      ))}
    </Styled.LineItems>
  )
}

const CartItem = ({ data }) => {
  const {
    // removeItem,
    updateItem,
  } = useContext(StoreCtx)

  const removeOne = () => updateItem(data.id, data.quantity - 1)

  const addOne = () => updateItem(data.id, data.quantity + 1)

  // const removeAll = () => removeItem(data.id)

  return (
    <Styled.ItemWrapper>
      <div>
        <Styled.ItemDescWrapper>
          <img src={data.variant.image && data.variant.image.src} alt="" />
          <div>
            {data.title}
            <GlobalStyled.FinePrint>
              {data.variant.title.toUpperCase()}
            </GlobalStyled.FinePrint>
          </div>
        </Styled.ItemDescWrapper>
      </div>

      <div>${data.variant.price}</div>

      <div>
        <Styled.QtyEdit type="button" onClick={removeOne}>
          -
        </Styled.QtyEdit>
        {pad(data.quantity)}
        <Styled.QtyEdit type="button" onClick={addOne}>
          +
        </Styled.QtyEdit>
      </div>
    </Styled.ItemWrapper>
  )
}

export default LineItems
