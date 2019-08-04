import styled from 'styled-components/macro'
import { default as LogoSvg } from 'components/Logo'
import { Wrap as GlobalWrap } from 'components/Styled'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

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
  margin: 0 0.25rem;
  text-decoration: none;

  &:last-child {
    margin-right: none;
  }

  &:first-child {
    margin-left: none;
  }
`

export default { Logo, Nav, Wrap, NavItem }
