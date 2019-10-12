import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
`

const SlideWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.count * 100}%;
  transition: transform 400ms ${props => props.theme.ease.standard};
`

const Slide = styled.div`
  width: 100%;
  flex: 1;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
`

export default { Slide, SlideWrapper, GalleryWrapper }
