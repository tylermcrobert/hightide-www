import styled, { css } from 'styled-components'
import { HEADING_LEVELS } from '../../style/GlobalStyle'
import { mq } from '../../style/theme'

const DefaultInput = styled.input`
  margin: 0;
  border: 0;
  padding: 0;
  display: block;
  white-space: normal;
  background: none;
  font-size: inherit;
  width: 100%;
  outline: none;
`

const TextInput = styled(DefaultInput)`
  ${HEADING_LEVELS[1]};
  color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding: ${props => props.theme.fontSizes[0]} 0;

  &::placeholder {
    color: ${props => props.theme.colors.grey};
    opacity: 1; /* Firefox */
  }
`

const Cols = styled.div`
  display: grid;

  @media ${mq.sm} {
    grid-gap: 0 ${props => props.theme.margins.standard};
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjTypeWrapper = styled.ul`
  display: grid;
  grid-gap: 0 ${props => props.theme.margins.standard};
  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

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

const Label = styled.label`
  ${HEADING_LEVELS[1]};
  color: ${props => props.theme.colors.grey};
  display: block;
  user-select: none;
  cursor: pointer;
  transition: 200ms transform ${props => props.theme.ease.standard},
    200ms opacity ${props => props.theme.ease.standard};
  line-height: ${props => props.theme.lineHeights.standard};

  &:before {
    content: '•';
    position: absolute;
    left: -1rem;
    opacity: 0;
    transition: 200ms opacity ${props => props.theme.ease.standard};
  }
`

const OptionInput = styled.input`
  display: none;

  &:checked + label {
    &:before {
      opacity: 1;
    }
    transform: translate3d(1rem, 0, 0);
    color: ${props => props.theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  ${HEADING_LEVELS[1]};
  width: 100%;
  outline: none;
  border: none;
`

export default {
  Title,
  TextInput,
  Cols,
  ProjTypeWrapper,
  DetailsWrapper,
  Label,
  OptionInput,
  TextArea,
}
