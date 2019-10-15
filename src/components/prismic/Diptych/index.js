import React from 'react'
import PropTypes from 'prop-types'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Styled from './Styled'

function Diptych({ items }) {
  if (items && items.length) {
    return (
      <Styled.DiptychWrapper>
        {items.map(({ url, dimensions }, i) => (
          <LazyImg
            key={`${url}${i}`}
            src={url}
            ratio={dimensions.height / dimensions.width}
          />
        ))}
      </Styled.DiptychWrapper>
    )
  }
  return null
}

Diptych.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Diptych
