import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin: ${props => props.theme.margins.slim} 0;

  * {
    color: ${props => props.theme.colors.secondary};
    margin: ${props => props.theme.margins.slim} 0;
  }
`

export default { Wrapper, Title }
