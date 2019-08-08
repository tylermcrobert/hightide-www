import styled from 'styled-components'
import { mq } from '../../style/theme'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 2}, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  a {
    &:hover {
      text-decoration: underline;
    }
    text-decoration: none;
  }
`

const Intro = styled.h1`
  @media ${mq.xs} {
    max-width: 14em;
  }
`

export default { Grid, Header, Intro }