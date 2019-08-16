import styled from 'styled-components'

const GalleryWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap ${props => props.theme.margins.standard};
`

export default { GalleryWrap }
