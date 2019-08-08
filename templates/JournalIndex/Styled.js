import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};

  a {
    text-decoration: none;
  }
`

const Img = styled.img`
  margin-bottom: ${props => props.theme.margins.standard};
`

export default { Wrapper, Img }
