import React, { useState, createContext, useContext } from 'react'
import Link from 'next/link'
import Styled from './Styled'
import { Wrap } from '../../style'

const NAV_ITEMS = [
  { display: 'Work', href: '#' },
  { display: 'Journal', href: '/journal/' },
  { display: 'About', href: '#' },
  { display: 'Contact', href: '#' },
]

const NavContext = createContext()
function Nav() {
  const [mobileNavEnabled, setMobileNav] = useState()
  return (
    <NavContext.Provider value={{ mobileNavEnabled, setMobileNav }}>
      <Styled.Nav>
        <Styled.Wrap>
          <Logo />
          <BurgerMenu />
          <DesktopLinks />
        </Styled.Wrap>
        <Overlay />
      </Styled.Nav>
    </NavContext.Provider>
  )
}

function Logo() {
  return (
    <Link href="/">
      <a>
        <Styled.Logo />
      </a>
    </Link>
  )
}

function DesktopLinks() {
  return (
    <Styled.Links>
      {NAV_ITEMS.map(item => (
        <Link href={item.href} key={item.display}>
          <Styled.NavItem href="#">{item.display}</Styled.NavItem>
        </Link>
      ))}
    </Styled.Links>
  )
}

/* FOR MOBILE */

function BurgerMenu() {
  const { mobileNavEnabled, setMobileNav } = useContext(NavContext)
  return (
    <Styled.NavItem onClick={() => setMobileNav(!mobileNavEnabled)}>
      <Styled.Burger enabled={mobileNavEnabled} />
    </Styled.NavItem>
  )
}

function Overlay() {
  const { mobileNavEnabled } = useContext(NavContext)
  return (
    <Styled.Overlay enabled={mobileNavEnabled}>
      <Wrap>
        {NAV_ITEMS.map(item => (
          <Link href={item.href} key={item.display}>
            <h1>{item.display}</h1>
          </Link>
        ))}
      </Wrap>
    </Styled.Overlay>
  )
}

// Nav.propTypes = {}

export default Nav
