import styled from 'styled-components'
import { mq } from 'style/theme'

const Cols = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

export default Cols
