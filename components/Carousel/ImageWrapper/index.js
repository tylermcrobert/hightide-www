import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CarouselCtx } from '..'
import useSwipe from './hooks/useSwipe'
import Styled from './Styled'

const ImageWrapper = () => {
  const { items } = useContext(CarouselCtx)
  const { handlers, slideWrapperRef, wrapperRef } = useSwipe()

  if (items && items.length) {
    return (
      <Styled.GalleryWrapper ref={wrapperRef}>
        <Styled.SlideWrapper {...handlers} className="js-swipe">
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

  return items.map((item, i) => {
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
  return (
    <Styled.Slide className="slide" current={current}>
      {children}
    </Styled.Slide>
  )
}

Slide.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired,
}

export default ImageWrapper
