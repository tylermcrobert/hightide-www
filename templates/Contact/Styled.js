import styled, { css } from 'styled-components'
import { HEADING_LEVELS } from '../../style/GlobalStyle'

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
  margin: 1rem 0;
  padding: ${props => props.theme.fontSizes[0]} 0;
`

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};
`

const Option = styled.h2`
  color: ${props => props.theme.colors.grey};
  line-height: ${props => props.theme.lineHeights.standard}
  margin: 0;
  cursor: pointer;
  position: relative;
  transform: translate3d(${props => (props.enabled ? 2 : 0)}rem, 0, 0);
  transition: 200ms transform ${props => props.theme.ease.standard};

  &:before {
    content:'•';
    position: absolute;
    left: -1.25rem;
    opacity: 0;

    opacity: ${props => (props.enabled ? 1 : 0)};
    transition:
      /* prettier-ignore */
      200ms transform ${props => props.theme.ease.standard},
      200ms opacity ${props => props.theme.ease.standard};
  }

  ${props =>
    props.enabled &&
    css`
      color: ${props.theme.colors.primary};
    `}
`

export default { TextInput, Cols, Option }
