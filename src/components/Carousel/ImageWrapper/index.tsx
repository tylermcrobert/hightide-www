import React, { useContext } from 'react'

import { CarouselCtx } from '..'
import Styled from './Styled'
import useFlickity from './hooks/useFlickity'
import { ArrowNext, ArrowPrev } from '../Icons'

const ImageWrapper = () => {
  const { items, getNext, getPrev } = useContext(CarouselCtx)
  const flickityRef = useFlickity()

  if (items && items.length) {
    return (
      <Styled.ImageWrapper>
        <Styled.Prev onClick={getPrev} cursor={<ArrowPrev />} />
        <Styled.Next onClick={getNext} cursor={<ArrowNext />} />

        <Styled.Images ref={flickityRef}>
          {items.map((item, i) => {
            const key = (item && `${item.key} ${i}`) || i
            return <Styled.Slide key={key}>{item}</Styled.Slide>
          })}
        </Styled.Images>
      </Styled.ImageWrapper>
    )
  }
  return null
}

export default ImageWrapper
