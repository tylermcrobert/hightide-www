import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
  margin: 0 ${props => props.theme.margins.standard};
`

export default { Wrapper, Link }
