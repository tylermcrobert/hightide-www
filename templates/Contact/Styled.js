import styled from 'styled-components'
import { HEADING_LEVELS } from 'style/GlobalStyle'
import { mq } from 'style/theme'

const DetailsWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: 2fr 1fr;
  }
`

const Title = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding-bottom: 0.75rem;
`

const TextArea = styled.textarea`
  ${HEADING_LEVELS[1]};
  width: 100%;
  outline: none;
  border: none;

  font-size: ${props => props.theme.fontSizes[2]};

  @media ${mq.sm} {
    font-size: ${props => props.theme.fontSizes[3]};
  }
`

const Label = styled.label`
  ${HEADING_LEVELS[1]};
  color: ${props => props.theme.colors.grey};
  display: block;
  user-select: none;
  cursor: pointer;
  transition: 200ms transform ${props => props.theme.ease.standard},
    200ms color ${props => props.theme.ease.standard};
  line-height: ${props => props.theme.lineHeights.standard};

  &:before {
    content: '•';
    position: absolute;
    left: -1rem;
    opacity: 0;
    transition: 200ms opacity ${props => props.theme.ease.standard};
  }
`

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Submit = styled.input`
  display: inline-block;
  border: none;
  margin: 0;
  padding: ${({ theme }) => `${theme.margins.slim} ${theme.margins.standard}`};
  outline: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  opacity: ${({ active }) => (active ? 1 : 0.1)};
  transition: 400ms opacity ${({ theme }) => theme.ease.standard};
`

const OptionInput = styled.input`
  display: none;

  &:hover + label {
    transform: translate3d(0.25rem, 0, 0);
  }
  &:checked + label {
    &:before {
      opacity: 1;
    }

    transform: translate3d(1rem, 0, 0);
    color: ${props => props.theme.colors.primary};
  }
`

export default {
  DetailsWrapper,
  TextArea,
  Title,
  Submit,
  SubmitWrapper,
  OptionInput,
  Label,
}
