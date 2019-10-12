import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { CarouselCtx } from '..'
import Styled from './Styled'

const ImageWrapper = () => {
  const { items, index: currentIndex } = useContext(CarouselCtx)

  if (items && items.length) {
    return (
      <ThemeProvider theme={{ count: items.length, index: currentIndex }}>
        <Styled.GalleryWrapper>
          <Styled.SlideWrapper as="ul" count={items.length}>
            {items.map((item, i) => (
              <Slide current={i === currentIndex} key={(item && item.key) || i}>
                {item}
              </Slide>
            ))}
          </Styled.SlideWrapper>
        </Styled.GalleryWrapper>
      </ThemeProvider>
    )
  }
  return null
}

const Slide = ({ children, current }) => {
  return <Styled.Slide current={current}>{children}</Styled.Slide>
}

Slide.propTypes = {
  children: PropTypes.any.isRequired,
  current: PropTypes.bool.isRequired,
}

export default ImageWrapper
