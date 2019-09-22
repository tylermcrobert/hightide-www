import styled from 'styled-components'
import { mq } from 'style/theme'

const Intro = styled.h1`
  @media ${mq.xs} {
    max-width: 14em;
  }
`

export default { Intro }
