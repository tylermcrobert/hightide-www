import styled from 'styled-components'
import { mq } from 'style/theme'

const ProductGrid = styled.div`
  display: grid;

  @media ${mq.xs} {
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: 1fr 1fr;
  }
`

const ItemTitle = styled.div`
  padding: 1rem 0;

  h2 {
    margin-bottom: 0.25rem;
  }
`

export default { ProductGrid, ItemTitle }
