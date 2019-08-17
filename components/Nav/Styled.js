import styled, { css } from 'styled-components'
import { Wrap as GlobalWrap } from '../../style'
import { mq } from '../../style/theme'
import LogoSvg from '../Logo'

const BREAKPOINT = mq.xs

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${props => props.theme.colors.secondary};
  transition: background ${props => props.theme.routeTransition.css};
  will-change: background;
`

const Wrap = styled(GlobalWrap)`
  display: flex;
  align-items: center;
  height: ${props => props.theme.navHeight};

  > * {
    &:first-child {
      flex: 1;
    }
  }
`

const Logo = styled(LogoSvg)`
  height: 1.1em;
  * {
    fill: ${props => props.theme.colors.primary};
    transition: fill ${props => props.theme.routeTransition.css};
    will-change: fill;
  }
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
  top: 50%;
`

const Burger = styled.div`
  display: block;
  position: relative;
  width: 1.5em;
  height: 1.5em;

  &::after {
    ${line}
    transform:
      ${props =>
        props.enabled ? 'rotate(-45deg)' : 'translateY(calc(-50% + 4px))'};
  }

  &::before {
    ${line}
    transform:
      ${props =>
        props.enabled ? 'rotate(45deg)' : 'translateY(calc(-50% - 4px))'};  }

  @media ${BREAKPOINT} {
    display: none;
  }
`

const Overlay = styled.div`
  visibility: ${props => (props.enabled ? 'visible' : 'hidden')};

  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  width: 100%;
  height: calc(100% - ${props => props.theme.navHeight});
  background: ${props => props.theme.colors.secondary};
  transition: background ${props => props.theme.routeTransition.css};
  will-change: background;

  display: flex;
  justify-content: center;
  flex-direction: column;

  text-align: center;
`

export default { Logo, Nav, Wrap, NavItem, Links, Burger, Overlay }
