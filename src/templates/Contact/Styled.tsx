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

const Information = styled.div`
  line-height: 1.5;

  p {
    margin-bottom: 0;
  }

  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
`

const InformationSection = styled.div`
  margin-bottom: 1.5rem;
`

export default { Link, Prompt, SubmitWrapper, Information, InformationSection }
