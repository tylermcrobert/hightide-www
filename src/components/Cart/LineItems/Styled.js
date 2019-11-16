import styled from 'styled-components'
import { Plus } from 'components/icons'

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: ${props => props.theme.fontSizes[2]};
`

const LineItems = styled.div`
  overflow: scroll;
  margin-bottom: ${props => props.theme.fontSizes[2]};
`

const CloseButton = styled(Plus)`
  transform: rotate(45deg) scale(0.96);
  width: ${props => props.theme.fontSizes[3]};
  cursor: pointer;

  g {
    stroke-width: 1.3;
  }
`

const Title = styled.h2`
  margin-bottom: 0.25rem;
`

const QtyEdit = styled.button`
  padding: 0 0.5em;
`

const ItemDescWrapper = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-gap: 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-gap: 1rem;
`

const LineItemHeader = styled(Grid)`
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding-bottom: 0.5rem;
`

const ItemWrapper = styled(Grid)`
  padding: 1rem 0;
  border-bottom: 1px solid grey;
`

export default {
  ItemWrapper,
  Title,
  QtyEdit,
  CloseButton,
  CartHeader,
  LineItems,
  ItemDescWrapper,
  LineItemHeader,
}
