import React, { useState, createContext, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link'
import { Wrap } from 'style'
import { Opacity } from 'components/LinkEffect'
import { StoreCtx } from 'components/StoreProvider'
import Styled from './Styled'
import Heading from '../Heading'

const NAV_ITEMS = [
  { display: 'Work', href: '/work' },
  { display: 'Journal', href: '/journal/' },
  { display: 'About', href: '/about' },
  { display: 'Contact', href: '/contact' },
  { display: 'Store', href: '/store' },
]

const NavContext = createContext()
function Nav() {
  const [mobileNavEnabled, setMobileNav] = useState(false)
  const { storeCount } = useContext(StoreCtx)

  return (
    <NavContext.Provider value={{ mobileNavEnabled, setMobileNav }}>
      <Styled.Nav>
        <Styled.Wrap>
          <Logo />
          <BurgerMenu />
          <DesktopLinks />
          {storeCount ? `Cart (${storeCount})` : null}
        </Styled.Wrap>
        <MobileOverlay />
      </Styled.Nav>
    </NavContext.Provider>
  )
}

function Logo() {
  return (
    <Link href="/">
      <a aria-label="Home">
        <Styled.Logo />
      </a>
    </Link>
  )
}

function DesktopLinks() {
  const { isDark } = useContext(ThemeContext)

  return (
    <Styled.Links>
      {NAV_ITEMS.map(item => (
        <Link href={item.href} key={item.display}>
          <Styled.NavItem href="#">
            <Opacity invert={isDark}>{item.display}</Opacity>
          </Styled.NavItem>
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

function MobileOverlay() {
  const { mobileNavEnabled, setMobileNav } = useContext(NavContext)

  return (
    <Styled.Overlay enabled={mobileNavEnabled}>
      <Wrap>
        <ul>
          {NAV_ITEMS.map(item => (
            <Link href={item.href} key={item.display}>
              <a onClick={() => setMobileNav(false)}>
                <Heading as="li" headingStyle={0}>
                  {item.display}
                </Heading>
              </a>
            </Link>
          ))}
        </ul>
      </Wrap>
    </Styled.Overlay>
  )
}

// Nav.propTypes = {}

export default Nav
