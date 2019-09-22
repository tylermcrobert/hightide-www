import styled from 'styled-components'
import { mq } from 'style/theme'

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  img {
    width: 5rem;

    @media ${mq.sm} {
      width: 8rem;
    }
    @media ${mq.md} {
      width: 10rem;
    }
    @media ${mq.lg} {
      width: 12rem;
    }
    display: inline-block;
    align-self: center;
  }
`

export default { Grid }
