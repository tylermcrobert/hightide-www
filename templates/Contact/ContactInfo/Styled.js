import styled from 'styled-components'
import { mq } from 'style/theme'
import { HEADING_LEVELS } from 'style/GlobalStyle'

const Cols = styled.div`
  display: grid;

  @media ${mq.sm} {
    grid-gap: 0 ${props => props.theme.margins.standard};
    grid-template-columns: repeat(2, 1fr);
  }
`

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

export default { Cols, TextInput }
