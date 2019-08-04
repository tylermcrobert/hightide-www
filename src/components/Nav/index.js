import React from 'react'
import { Wrap } from 'components/Styled'
import Styled from './Styled'

function Nav() {
  return (
    <Styled.Nav>
      <Styled.Wrap>
        <Styled.Logo />
        <div>
          <Styled.NavItem href="#"> Work</Styled.NavItem>
          <Styled.NavItem href="#">Journal</Styled.NavItem>
          <Styled.NavItem href="#">About</Styled.NavItem>
          <Styled.NavItem href="#">Contact</Styled.NavItem>
        </div>
      </Styled.Wrap>
    </Styled.Nav>
  )
}

// Nav.propTypes = {}

export default Nav
