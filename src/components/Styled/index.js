import styled, { css } from 'styled-components/macro'
import { mq } from 'containers/Layout/theme'

export const Img = styled.img`
  width: 100%;
  display: block;
`

export const Wrap = styled.div`
  margin: 0px auto;
  padding: 0 1rem;
  max-width: 70rem;
  width: 100%;
`

export const Section = styled.div`
  margin: 2rem 0;

  @media ${mq.md} {
    margin: 3rem 0;
  }
  @media ${mq.lg} {
    margin: 4rem 0;
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
  margin: 6rem 0;

  @media ${mq.md} {
    margin: 7rem 0;
  }
  @media ${mq.lg} {
    margin: 8rem 0;
  }
`
export default null
