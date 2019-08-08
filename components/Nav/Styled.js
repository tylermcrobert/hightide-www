import styled, { css } from 'styled-components'
import { Wrap as GlobalWrap } from '../../style'
import { mq } from '../../style/theme'
import LogoSvg from '../Logo'

const BREAKPOINT = mq.sm

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

const Links = styled.div`
  display: none;

  @media ${BREAKPOINT} {
    display: block;
  }
`

const ease = props => props.theme.ease.standard

const line = css`
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${props => props.theme.colors.primary};
  transition: 200ms ${ease} transform;
`

const Burger = styled.div`
  display: block;
  position: relative;
  width: 1.5em;

  &::after {
    ${line}
    transform:
      ${props => (props.enabled ? 'rotate(-45deg)' : 'translateY(4px)')};
  }

  &::before {
    ${line}
    transform:
      ${props => (props.enabled ? 'rotate(45deg)' : 'translateY(-4px)')};  }

  @media ${BREAKPOINT} {
    display: none;
  }
`

export default { Logo, Nav, Wrap, NavItem, Links, Burger }
