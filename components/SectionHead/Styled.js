import styled from 'styled-components'

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  a {
    &:hover {
      text-decoration: underline;
    }
    text-decoration: none;
  }
`

export default { Header }
