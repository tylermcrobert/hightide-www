import styled from 'styled-components'
import { mq } from 'style/theme'

const BREAKPOINT = mq.sm

const Body = styled.div`
  line-height: ${props => props.theme.lineHeights.tight};
`

const Wrapper = styled.div`
  @media ${BREAKPOINT} {
    display: ${props => (props.cols > 1 ? 'grid' : 'block')};
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    grid-gap: ${props => props.theme.margins.slim};
  }
`
const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.primary};
  padding-top: ${props => props.theme.margins.slim};
  cursor: pointer;
  user-select: none;

  @media ${BREAKPOINT} {
    &:last-child {
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  }
`

const Head = styled.h2`
  margin-bottom: ${props => props.theme.margins.slim};
  position: relative;
  display: flex;
  justify-content: space-between;
`

const CloseMarker = styled.div`
  transition: 200ms transform ease-out;
  transform: rotate(${props => (props.theme.active ? 45 : 0)}deg); */}
  display: inline-block;
`

const ColWrapper = styled.div``

export default { Item, ColWrapper, Wrapper, Body, Head, CloseMarker }
