import styled from 'styled-components'
import { mq } from '../../style/theme'

const Wrapper = styled.div`
  width: 100%;
  @media ${mq.xs} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${props => props.theme.margins.standard};
  }
`

const Link = styled.a`
  margin: ${props => props.theme.margins.standard} auto;
  display: block;

  text-align: center;
`
export default { Wrapper, Link }
