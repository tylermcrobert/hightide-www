import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CarouselCtx } from '..'

const ImageWrapper = () => {
  const { items, index: currentIndex } = useContext(CarouselCtx)

  if (items && items.length) {
    return (
      <ul>
        {items.map((item, i) => (
          <li key={(item && item.key) || i}>
            <Slide current={i === currentIndex}>{item}</Slide>
          </li>
        ))}
      </ul>
    )
  }
  return null
}

const Slide = ({ children, current }) => {
  return current ? <div>{children}</div> : null
}

Slide.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired,
}

export default ImageWrapper
