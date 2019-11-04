import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};
`

const ProductDetail = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};
`

export default { Wrapper, ProductDetail }
