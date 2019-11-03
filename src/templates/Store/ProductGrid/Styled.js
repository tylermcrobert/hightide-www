import styled from 'styled-components'
import { mq } from 'style/theme'

const ProductGrid = styled.div`
  display: grid;

  @media ${mq.xs} {
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: 1fr 1fr;
  }
`

export default { ProductGrid }
