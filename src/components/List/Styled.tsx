import styled from 'styled-components'
import Cols from 'components/Cols'

const Wrapper = styled(Cols)`
  grid-row-gap: 0;
`

const Item = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.margins.slim} 0;

  &:first-child {
    border-top: 1px solid ${props => props.theme.colors.primary};
  }
`

export default { Item, Wrapper }
