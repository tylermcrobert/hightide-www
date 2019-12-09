import styled from 'styled-components'
import Cols from 'components/Cols'
import { mq } from 'style/theme'

const Wrapper = styled(Cols)`
  grid-row-gap: 0;
`

const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.margins.slim} 0;

  &:last-child {
    @media ${mq.sm} {
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  }
`

export default { Item, Wrapper }
