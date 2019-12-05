import styled from 'styled-components'
import Button from 'components/Button'

const Link = styled.div`
  cursor: pointer;
`

const Prompt = styled(Link)<{ isHidden: boolean }>`
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition-property: opacity;
  transition-duration: 150ms;
  transition-timing-function: ${props => props.theme.ease.standard};
`

const SubmitWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 1rem;
  padding-top: 1rem;
`

export default { Link, Prompt, SubmitWrapper }
