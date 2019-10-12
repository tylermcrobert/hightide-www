import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { CarouselCtx } from '..'
import usePrevious from './hooks/usePrevious'
import Styled from './Styled'

const ImageWrapper = () => {
  const { items, index: currentIndex } = useContext(CarouselCtx)

  const prevIndex = usePrevious(currentIndex)
  const restarting = !!(prevIndex && currentIndex === 0)

  if (items && items.length) {
    return (
      <ThemeProvider
        theme={{ count: items.length, index: currentIndex, restarting }}
      >
        <Styled.GalleryWrapper>
          <Styled.SlideWrapper as="ul" count={items.length}>
            {[...items, items[0]].map((item, i) => (
              <Slide
                current={i === currentIndex}
                key={(item && `${item.key} ${i}`) || i}
              >
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
