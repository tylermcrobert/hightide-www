import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CarouselCtx } from '..'
import Styled from './Styled'
import useFlickity from './hooks/useFlickity'

const ImageWrapper = () => {
  const { items, getNext, getPrev } = useContext(CarouselCtx)
  const flickityRef = useFlickity()

  if (items && items.length) {
    return (
      <Styled.GalleryWrapper>
        <Styled.NavOverlay.Prev onClick={getPrev} />
        <Styled.NavOverlay.Next onClick={getNext} />
        <Styled.SlideWrapper ref={flickityRef}>
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
