import styled from 'styled-components'
import { HEADING_LEVELS } from 'style/GlobalStyle'
import { mq } from 'style/theme'

const GREY = props => props.theme.colors.grey

const fs = (input: number) => props => props.theme.fontSizes[input]

const FS_DEFAULT = fs(3)

export const TextArea = styled.textarea`
  ${HEADING_LEVELS[1]};
  width: 100%;
  outline: none;
  border: 1px solid ${GREY};
  font-size: ${FS_DEFAULT};
  padding: ${fs(0)};
`

export const Input = styled.input`
  font-size: ${fs(4)};
  color: ${props => props.theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${GREY};
  outline: none;
  width: 100%;
  margin-top: ${fs(3)};
  padding-bottom: ${fs(0)};

  ::placeholder {
    color: ${GREY};
    opacity: 1; /* Firefox */
  }
`

export const Header = styled.div`
  margin-top: ${fs(5)};
  padding-bottom: ${fs(0)};
`
