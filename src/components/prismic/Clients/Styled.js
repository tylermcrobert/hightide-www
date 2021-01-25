import styled from 'styled-components'
import { mq } from 'style/theme'

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  img {
    width: 7rem;
    margin: 0 0.75rem;
    display: inline-block;
    align-self: center;

    @media ${mq.xs} {
      width: 7.5rem;
      margin: 0 1.5rem;
    }

    @media ${mq.sm} {
      width: 7.5rem;
      margin: 0 1.5rem;
    }

    @media ${mq.md} {
      width: 9rem;
      margin: 0 1.5rem;
    }

    @media ${mq.lg} {
      width: 9rem;
      margin: 0 2rem;
    }
  }
`

export default { Grid }
