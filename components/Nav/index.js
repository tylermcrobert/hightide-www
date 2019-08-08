import React from 'react'
import Link from 'next/link'
import Styled from './Styled'

function Nav() {
  return (
    <Styled.Nav>
      <Styled.Wrap>
        <Link href="/">
          <a>
            <Styled.Logo />
          </a>
        </Link>
        <div>
          <Styled.NavItem href="#"> Work</Styled.NavItem>
          <Link href="/journal">
            <Styled.NavItem href="#">Journal</Styled.NavItem>
          </Link>
          <Styled.NavItem href="#">About</Styled.NavItem>
          <Styled.NavItem href="#">Contact</Styled.NavItem>
        </div>
      </Styled.Wrap>
    </Styled.Nav>
  )
}

// Nav.propTypes = {}

export default Nav
