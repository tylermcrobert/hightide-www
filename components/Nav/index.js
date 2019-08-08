import React, { useState } from 'react'
import Link from 'next/link'
import Styled from './Styled'
import { Wrap } from '../../style'

const NAV_ITEMS = [
  { display: 'Work', href: '#' },
  { display: 'Journal', href: '/journal/' },
  { display: 'About', href: '#' },
  { display: 'Contact', href: '#' },
]

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
          {NAV_ITEMS.map(item => (
            <Link href={item.href}>
              <Styled.NavItem href="#">{item.display}</Styled.NavItem>
            </Link>
          ))}
        </Styled.Links>
      </Styled.Wrap>
      <Styled.Overlay enabled={mobileNavEnabled}>
        <Wrap>
          {NAV_ITEMS.map(item => (
            <Link href={item.href}>
              <h1>{item.display}</h1>
            </Link>
          ))}
        </Wrap>
      </Styled.Overlay>
    </Styled.Nav>
  )
}

// Nav.propTypes = {}

export default Nav
