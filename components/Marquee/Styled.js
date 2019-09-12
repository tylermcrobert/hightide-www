import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  min-width: 100%;
  overflow: hidden;
`

const slide = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`

const Track = styled.div`
  width: ${props => props.width}px;
  min-width: 200%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  animation: ${slide} 10s infinite linear;
  animation-play-state: ${props => (props.paused ? 'paused' : 'running')};
`
export default { Wrapper, Track }
