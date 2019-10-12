import styled from 'styled-components'

const GalleryWrapper = styled.div`
  overflow: hidden;
`

const translateVal = ({ theme }) => {
  if (theme.restarting) {
    return 100 / (theme.count + 1) - 100
  }

  return -(100 / (theme.count + 1)) * theme.index
}

const SlideWrapper = styled.ul`
  display: flex;
  width: ${({ theme }) => (theme.count + 1) * 100}%;
  transform: translate3d(${translateVal}%, 0, 0);
  transition: transform 500ms ${props => props.theme.ease.standard};
`

const Slide = styled.div`
  width: 100%;
  flex: 1;
`

export default { Slide, SlideWrapper, GalleryWrapper }
