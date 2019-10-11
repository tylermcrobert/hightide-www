import React, { useContext } from 'react'
import { CarouselCtx } from '..'
import Styled from './Styled'

const Nav = () => {
  const { items, index, getPrev, getNext } = useContext(CarouselCtx)

  return (
    <Styled.NavWrapper>
      <Styled.NavItem>
        {index + 1} / {items.length}
      </Styled.NavItem>
      <Styled.NavItem onClick={getPrev}>Prev</Styled.NavItem>
      <Styled.NavItem onClick={getNext}>Next</Styled.NavItem>
    </Styled.NavWrapper>
  )
}

// Nav.propTypes = {}

export default Nav
