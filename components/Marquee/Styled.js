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
  min-width: 200%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  animation: ${slide} 10s infinite linear;

  &:hover {
    animation-play-state: paused;
  }
`
export default { Wrapper, Track }
