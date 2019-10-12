import React, { useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { CarouselCtx } from '..'
import usePrevious from './hooks/usePrevious'
import Styled from './Styled'

const ImageWrapper = () => {
  const { items, index: currentIndex } = useContext(CarouselCtx)
  const slideWrapperRef = useRef()

  const prevIndex = usePrevious(currentIndex)
  const isRestarting = !!(prevIndex && currentIndex === 0)

  if (items && items.length) {
    return (
      <Styled.GalleryWrapper>
        <Styled.SlideWrapper ref={slideWrapperRef}>
          <Slides />
        </Styled.SlideWrapper>
      </Styled.GalleryWrapper>
    )
  }
  return null
}

const Slides = () => {
  const { items, index: currentIndex } = useContext(CarouselCtx)
  /* add first item to end */
  const infiniteItems = [...items, items[0]]

  return infiniteItems.map((item, i) => {
    const isCurrent = i === currentIndex
    const key = (item && `${item.key} ${i}`) || i

    return (
      <Slide current={isCurrent} key={key}>
        {item}
      </Slide>
    )
  })
}

const Slide = ({ children, current }) => {
  return <Styled.Slide current={current}>{children}</Styled.Slide>
}

Slide.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired,
}

export default ImageWrapper
