import React, { useContext } from 'react'
import pad from 'util/pad'
import { CarouselCtx } from '..'
import Styled from './Styled'

export const FractionIndicator = () => {
  const { items, index, getNext, getPrev } = useContext(CarouselCtx)
  return (
    <>
      <Styled.Span onClick={getPrev}>{pad(index + 1)}</Styled.Span>
      &nbsp;/&nbsp;
      <Styled.Span onClick={getNext}>{pad(items.length)}</Styled.Span>
    </>
  )
}

const Nav = () => {
  const { getPrev, getNext } = useContext(CarouselCtx)

  return (
    <Styled.NavWrapper>
      <Styled.NavItem>
        <FractionIndicator />
      </Styled.NavItem>
      <Styled.NavItem onClick={getPrev}>Prev</Styled.NavItem>
      <Styled.NavItem onClick={getNext}>Next</Styled.NavItem>
    </Styled.NavWrapper>
  )
}

// Nav.propTypes = {}

export default Nav
