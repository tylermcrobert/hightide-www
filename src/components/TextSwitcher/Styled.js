import styled from 'styled-components/macro'
import { mq } from 'containers/Layout/theme'

const BREAKPOINT = mq.sm

const Wrapper = styled.div`
  @media ${BREAKPOINT} {
    display: ${props => (props.cols ? 'grid' : 'block')};
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`
const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.primary};
  padding-top: 1rem;
  cursor: pointer;
  user-select: none;

  @media ${BREAKPOINT} {
    &:last-child {
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  }
`

const ColWrapper = styled.div``

export default { Item, ColWrapper, Wrapper }
