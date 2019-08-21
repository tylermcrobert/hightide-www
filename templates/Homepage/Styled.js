import styled from 'styled-components'
import { mq } from '../../style/theme'

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  img {
    width: 10%;
    display: inline-block;
    align-self: center;
  }
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
