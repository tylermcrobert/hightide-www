import styled from 'styled-components'

const TextWrap = styled.div`
  max-width: 33em;
  margin: ${props => props.center && '0 auto'};

  p {
    min-height: 1rem;
  }
  a {
    font-weight: 400;
  }
`

export default TextWrap
