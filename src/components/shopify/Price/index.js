import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'

function Price({ variant, product }) {
  const isDiscount = !!variant.compareAtPrice

  if (product.availableForSale) {
    return (
      <>
        <Styled.CurrentPrice isDiscount={isDiscount}>
          ${variant.price}
          &nbsp;
        </Styled.CurrentPrice>
        {isDiscount && (
          <Styled.ComparePrice>${variant.compareAtPrice}</Styled.ComparePrice>
        )}
      </>
    )
  }
  return <Styled.SoldOut>Sold out</Styled.SoldOut>
}

Price.propTypes = {
  variant: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}

export default Price
