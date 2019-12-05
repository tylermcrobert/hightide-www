import styled from 'styled-components'
import { mq } from 'style/theme'

const BREAKPOINT = mq.sm

const Body = styled.div`
  line-height: ${props => props.theme.lineHeights.tight};
  overflow: hidden;
`

const Wrapper = styled.div<{ cols: number }>`
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

const HeadWrapper = styled.div`
  display: flex;
  position: relative;
`
const Head = styled.h2`
  margin-bottom: ${props => props.theme.margins.slim};
  position: relative;
  flex: 1;
  margin-right: 1.25em;
`

const CloseMarker = styled.h2`
  transition: 200ms transform ease-out;
  transform: rotate(${props => (props.theme.active ? 45 : 0)}deg);
  display: inline-block;
  transform-origin: center;

  position: absolute;
  right: 0;
`

const ColWrapper = styled.div``

export default {
  Item,
  HeadWrapper,
  ColWrapper,
  Wrapper,
  Body,
  Head,
  CloseMarker,
}
