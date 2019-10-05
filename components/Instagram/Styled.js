import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Link = styled.a`
  margin: ${props => props.theme.margins.standard} auto;
  display: block;

  text-align: center;
`
export default { Wrapper, Link }
