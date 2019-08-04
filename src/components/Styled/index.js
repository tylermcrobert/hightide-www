import styled, { css } from 'styled-components'
import { mq } from 'containers/Layout/theme'

export const Img = styled.img`
  width: 100%;
  display: block;
`

export const Wrap = styled.div`
  margin: 0px auto;
  padding: 0 1rem;
  max-width: 68rem;
`

export const Section = styled.div`
  margin: 1rem 0;

  @media ${mq.md} {
    margin: 2rem 0;
  }
  @media ${mq.lg} {
    margin: 2.5rem 0;
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

export default null
