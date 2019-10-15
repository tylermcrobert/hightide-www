import styled, { css } from 'styled-components'
import { mq } from './theme'

export const Img = styled.img`
  width: 100%;
  display: block;
`

export const Wrap = styled.div`
  margin: 0px auto;
  padding: 0 ${props => props.theme.margins.standard};
  max-width: 70rem;
  width: 100%;
`

export default null
