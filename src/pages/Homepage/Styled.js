import styled from 'styled-components/macro'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 2}, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
`

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

export default { Grid, Header }
