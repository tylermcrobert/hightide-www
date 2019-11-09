import React, { useContext } from 'react'

import { CarouselCtx } from '..'
import Styled from './Styled'
import useFlickity from './hooks/useFlickity'

const ImageWrapper = () => {
  const { items, getNext, getPrev } = useContext(CarouselCtx)
  const flickityRef = useFlickity()

  if (items && items.length) {
    return (
      <Styled.ImageWrapper>
        <Styled.Nav.Prev onClick={getPrev} hover="prev" />
        <Styled.Nav.Next onClick={getNext} hover="next" />
        <Styled.Nav.Go onClick={null} hover="see project" />
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
