import styled from 'styled-components'

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

export default { Gallery }
