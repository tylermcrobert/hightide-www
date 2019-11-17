import React, { useContext } from 'react'
import { StoreCtx } from 'components/StoreProvider'
import pad from 'util/pad'
import PropTypes from 'prop-types'
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
        <LineItem data={item} key={`${item.title}${i}`} />
      ))}
    </Styled.LineItems>
  )
}

const LineItem = ({ data }) => {
  const { updateItem } = useContext(StoreCtx)

  const removeOne = () => updateItem(data.id, data.quantity - 1)
  const addOne = () => updateItem(data.id, data.quantity + 1)

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

LineItem.propTypes = {
  data: PropTypes.shape({
    variant: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
}

export default LineItems
