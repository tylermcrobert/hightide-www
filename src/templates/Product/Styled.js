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

  > ul {
    margin-top: 3rem;

    > li {
      padding: 0.75rem 0;
      border-top: 1px solid ${props => props.theme.colors.primary};
    }

    /* Description */
    > ul {
      overflow: hidden;
      box-sizing: content-box;

      > li:last-child {
        padding-bottom: 1rem;
      }
    }
  }
`

export default { Wrapper, ProductDetail, Description }
