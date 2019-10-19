import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
  position: relative;
`

const NavOverlay = styled.div`
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
`

NavOverlay.Prev = styled(NavOverlay)`
  cursor: w-resize;
`

NavOverlay.Next = styled(NavOverlay)`
  cursor: e-resize;
  left: 50%;
`

const SlideWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.count * 100}%;
  transition: transform ${props => props.theme.ease.standard};
`

const Slide = styled.li`
  width: 100%;
  flex: 1;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
`

export default { Slide, SlideWrapper, NavOverlay, GalleryWrapper }
