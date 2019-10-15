import styled from 'styled-components'

import { mq } from 'style/theme'

const ProjTypeWrapper = styled.ul`
  display: grid;
  grid-gap: 0 ${props => props.theme.margins.standard};
  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default {
  ProjTypeWrapper,
}
