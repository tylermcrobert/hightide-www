import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'

function Price({ variant }) {
  const isDiscount = !!variant.compareAtPrice

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

Price.propTypes = {
  variant: PropTypes.object.isRequired,
}

export default Price
