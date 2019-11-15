import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Nav, { FractionIndicator } from './Nav'
import ImageWrapper from './ImageWrapper'
import { Expand } from './Icons'

export const CarouselCtx = createContext()

export const Wrapper = ({ children, items }) => {
  const [index, setCurrentIndex] = useState(0)

  const { length } = items
  const nextIndex = (index + 1) % length
  const prevIndex = (index + length - 1) % length

  const getNext = () => setCurrentIndex(nextIndex)
  const getPrev = () => setCurrentIndex(prevIndex)

  if (items && items.length) {
    return (
      <ThemeProvider theme={{ count: items.length, index }}>
        <CarouselCtx.Provider
          value={{ items, index, getNext, getPrev, setCurrentIndex }}
        >
          {children}
        </CarouselCtx.Provider>
      </ThemeProvider>
    )
  }
  console.error('CAROUSEL: items must be an array')
  return null
}

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export { Nav, FractionIndicator, ImageWrapper, Expand }
