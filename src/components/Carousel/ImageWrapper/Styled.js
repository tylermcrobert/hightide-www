import styled from 'styled-components'
import CursorHover from 'components/CursorHover'

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

const Nav = styled(CursorHover)`
  display: block;
  position: absolute;
  top: 0;
  width: 33.34%;
  height: 100%;
  z-index: 100;
  mix-blend-mode: difference;

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

Nav.Go = styled(Nav)`
  left: 33.34%;
`
export default { Slide, Images, ImageWrapper, Nav }
