import styled from 'styled-components'
import { CursorTrigger } from 'components/CursorHover'

const ImageWrapper = styled.div`
  position: relative;

  /* Fixes weird 1px bug  */
  .flickity-viewport {
    width: calc(100% + 1px);
  }
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

const Nav = styled(CursorTrigger)`
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
type Props = React.HTMLAttributes<HTMLElement>

const Prev = styled(Nav)<Props>`
  left: 0;
`

const Next = styled(Nav)<Props>`
  left: 66.67%;
`

export default { Slide, Images, ImageWrapper, Nav, Prev, Next }
