import styled from 'styled-components'

const TextWrap = styled.div`
  max-width: 30em;
  margin: ${props => props.center && '0 auto'};
`

const Gallery = styled.div`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-gap: ${props => props.theme.margins.standard};

  img {
    &:nth-child(3) {
      grid-area: bottom;
    }
  }
`

export default { TextWrap, Gallery }
