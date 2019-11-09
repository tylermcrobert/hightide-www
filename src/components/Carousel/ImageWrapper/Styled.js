import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: relative;
`

const Images = styled.div`
  overflow: hidden;
  position: relative;

  .flickity-viewport {
    cursor: inherit !important;
  }
`

const Slide = styled.div`
  width: 100%;
`

const Nav = styled.div`
  display: block;
  border: 1px solid blue;
  position: absolute;
  top: 0;
  width: 33.34%;
  height: 100%;
  z-index: 100;

  /* hide on mobile */
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`

Nav.Prev = styled(Nav)`
  left: 0;
`

Nav.Next = styled(Nav)`
  left: 66.67%;
`

export default { Slide, Images, ImageWrapper, Nav }
