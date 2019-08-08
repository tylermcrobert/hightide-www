import styled from 'styled-components'
import { Wrap as GlobalWrap } from '../../style'
import LogoSvg from '../Logo'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  background: ${props => props.theme.colors.secondary};
`

const Wrap = styled(GlobalWrap)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  height: ${props => props.theme.navHeight};
`

const Logo = styled(LogoSvg)`
  height: 1.1em;
`

const NavItem = styled.a`
  margin: 0 0.5em;
  text-decoration: none;

  &:last-child {
    margin-right: none;
  }

  &:first-child {
    margin-left: none;
  }
`

export default { Logo, Nav, Wrap, NavItem }
