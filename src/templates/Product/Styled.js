import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: ${props => props.theme.margins.standard};
`

const ProductDetail = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};
`

const Description = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};

  li {
    padding-left: 1em;
    position: relative;
    margin-bottom: 0.5rem;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
    }
  }
`

export default { Wrapper, ProductDetail, Description }
