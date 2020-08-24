import React from 'react'
import Styled from './Styled'
import ScrollToTopIcon from './ScrollToTopIcon'

const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Styled.ScrollToTop onClick={handleScroll} role="button">
      <ScrollToTopIcon />
    </Styled.ScrollToTop>
  )
}

export default ScrollToTop
