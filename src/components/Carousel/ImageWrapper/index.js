import React, { useContext } from 'react'

import { CarouselCtx } from '..'
import Styled from './Styled'
import useFlickity from './hooks/useFlickity'

const ImageWrapper = () => {
  const { items } = useContext(CarouselCtx)
  const flickityRef = useFlickity()

  if (items && items.length) {
    return (
      <Styled.GalleryWrapper ref={flickityRef}>
        {items.map((item, i) => {
          const key = (item && `${item.key} ${i}`) || i
          return <Styled.Slide key={key}>{item}</Styled.Slide>
        })}
      </Styled.GalleryWrapper>
    )
  }
  return null
}

export default ImageWrapper
