import React, { useState } from 'react'
import Link from 'next/link'
import Styled from './Styled'

function Nav() {
  const [mobileNavEnabled, setMobileNav] = useState()
  return (
    <Styled.Nav>
      <Styled.Wrap>
        <Link href="/">
          <a>
            <Styled.Logo />
          </a>
        </Link>
        <Styled.NavItem onClick={() => setMobileNav(!mobileNavEnabled)}>
          <Styled.Burger enabled={mobileNavEnabled} />
        </Styled.NavItem>
        <Styled.Links>
          <Styled.NavItem href="#"> Work</Styled.NavItem>
          <Link href="/journal">
            <Styled.NavItem href="#">Journal</Styled.NavItem>
          </Link>
          <Styled.NavItem href="#">About</Styled.NavItem>
          <Styled.NavItem href="#">Contact</Styled.NavItem>
        </Styled.Links>
      </Styled.Wrap>
    </Styled.Nav>
  )
}

// Nav.propTypes = {}

export default Nav
