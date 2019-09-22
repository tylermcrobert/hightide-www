import React from 'react'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Styled from './Styled'

function Diptych({ items }) {
  if (items && items.length) {
    return (
      <Styled.DiptychWrapper>
        {items.map(({ url, dimensions }) => (
          <LazyImg src={url} ratio={dimensions.height / dimensions.width} />
        ))}
      </Styled.DiptychWrapper>
    )
  }
  return null
}

// Diptych.propTypes = {}

export default Diptych
