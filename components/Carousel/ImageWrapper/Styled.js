import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
`

const SlideWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.count * 100}%;
`

const Slide = styled.div`
  width: 100%;
  flex: 1;
`

export default { Slide, SlideWrapper, GalleryWrapper }
