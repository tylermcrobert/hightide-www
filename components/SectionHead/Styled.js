import styled, { css } from 'styled-components'

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  ${props =>
    props.line &&
    css`
      border-bottom: 1px solid ${props.theme.colors.standard};
      margin-bottom: ${props.theme.margins.standard};
    `}

  a {
    &:hover {
      text-decoration: underline;
    }
    text-decoration: none;
  }
`

export default { Header }
