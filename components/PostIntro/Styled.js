import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.margins.standard};
  }

  @media ${mq.lg} {
    grid-template-columns: 1fr auto;
  }

  p {
    margin-bottom: 0;
  }

  @media ${mq.sm} {
    h1 {
      max-width: 11em;
    }
  }
`

export default { Wrapper }
