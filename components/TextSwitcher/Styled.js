import styled from 'styled-components'
import { mq } from '../../style/theme'

const BREAKPOINT = mq.sm

const Wrapper = styled.div`
  @media ${BREAKPOINT} {
    display: ${props => (props.cols ? 'grid' : 'block')};
    grid-template-columns: 1fr 1fr;
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
`

const ColWrapper = styled.div``

export default { Item, ColWrapper, Wrapper, Head }
