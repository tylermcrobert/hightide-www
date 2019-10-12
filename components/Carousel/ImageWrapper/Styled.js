import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
`
const SlideWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.count * 100}%;
  transform: translate3d(
    -${({ theme }) => (theme.index / theme.count) * 100}%,
    0,
    0
  );
  transition: transform 300ms ${props => props.theme.ease.standard};
`

const Slide = styled.div`
  width: 100%;
  flex: 1;
`

export default { Slide, SlideWrapper, GalleryWrapper }
