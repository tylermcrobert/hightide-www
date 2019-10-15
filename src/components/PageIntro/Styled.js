import styled from 'styled-components'
import Section from 'components/Section'
import { mq } from 'style/theme'

const Intro = styled(Section)`
  br {
    display: none;
  }
  @media ${mq.sm} {
    h1 {
      max-width: 15em;
    }

    br {
      display: inherit;
    }
  }
`

export default { Intro }
