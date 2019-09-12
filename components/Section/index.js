import styled, { css } from 'styled-components'
import { mq } from '../../style/theme'

const Section = styled.div`
  margin: 4rem 0;

  @media ${mq.sm} {
    margin: 5rem 0;
  }
  @media ${mq.md} {
    margin: 6rem 0;
  }
  @media ${mq.lg} {
    margin: 6rem 0;
  }
  @media ${mq.xl} {
    margin: 8rem 0;
  }
  ${props =>
    props.noTop &&
    css`
      margin-top: 0 !important;
    `}
  ${props =>
    props.noBottom &&
    css`
      margin-bottom: 0 !important;
    `}
`

Section.Large = styled(Section)`
  margin: 8rem 0;

  @media ${mq.md} {
    margin: 10rem 0;
  }
  @media ${mq.lg} {
    margin: 12rem 0;
  }
`

export default Section
