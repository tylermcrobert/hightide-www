import styled from 'styled-components'
import { mq } from 'style/theme'

const DiptychWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.xs} {
    grid-template-columns: 1fr 1fr;
  }
`

export default { DiptychWrapper }
