import styled from 'styled-components'
import { mq } from 'style/theme'

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  img {
    width: 5rem;
    margin: 0 0.75rem;
    display: inline-block;
    align-self: center;

    @media ${mq.sm} {
      width: 6rem;
      margin: 0 1.5rem;
    }

    @media ${mq.md} {
      width: 7rem;
      margin: 0 1.5rem;
    }

    @media ${mq.lg} {
      width: 7rem;
      margin: 0 2rem;
    }
  }
`

export default { Grid }
