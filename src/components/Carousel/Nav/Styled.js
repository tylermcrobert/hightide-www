import styled from 'styled-components'

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 1rem;
  text-align: center;
`

const NavItem = styled.div`
  cursor: pointer;
  user-select: none;
`

const Span = styled.span`
  cursor: pointer;
  user-select: none;
`
export default { NavWrapper, Span, NavItem }
