import styled from 'styled-components'
import { mq } from 'style/theme'

const LineItems = styled.div`
  overflow: scroll;
  margin-bottom: ${props => props.theme.fontSizes[2]};
  font-size: 80%;

  @media ${mq.xs} {
    font-size: 100%;
  }
`

const QtyEdit = styled.button`
  padding: 0 0.5em;
`

const ItemDescWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  img {
    display: none;

    @media ${mq.sm} {
      display: block;
    }
  }

  @media ${mq.sm} {
    grid-template-columns: 4rem 1fr;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.75em 5em;
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
  QtyEdit,
  LineItems,
  ItemDescWrapper,
  LineItemHeader,
}
