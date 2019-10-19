import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
  position: relative;

  .flickity-viewport {
    cursor: inherit !important;
  }
`

const Slide = styled.div`
  width: 100%;
`

export default { Slide, GalleryWrapper }
