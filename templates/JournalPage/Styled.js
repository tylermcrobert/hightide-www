import styled from 'styled-components'

const TextWrap = styled.div`
  max-width: 30em;
  line-height: 1.5;
  margin: ${props => props.center && '0 auto'};
`

const Gallery = styled.div`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-gap: 1rem;

  img {
    &:nth-child(3) {
      grid-area: bottom;
    }
  }
`

export default { TextWrap, Gallery }
