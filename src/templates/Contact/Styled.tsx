import styled from 'styled-components'
import { log } from 'util'

const Link = styled.div`
  cursor: pointer;
  text-decoration: underline;
`

const Prompt = styled(Link)<{ isHidden: boolean }>`
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition-property: opacity;
  transition-duration: 150ms;
  transition-timing-function: ${props => props.theme.ease.standard};
`

const Close = styled(Link)`
  text-align: center;
`

export default { Link, Prompt, Close }
