import styled, { keyframes } from 'styled-components'
import { mq } from 'style/theme'

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

const speed = factor => props => props.speed * factor || 10

const Track = styled.div`
  width: ${props => props.width}px;
  min-width: 200%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  animation-play-state: ${props => (props.paused ? 'paused' : 'running')};

  animation: ${slide} ${speed(0.8)}s infinite linear;

  @media ${mq.md} {
    animation: ${slide} ${speed(1)}s infinite linear;
  }
`
export default { Wrapper, Track }
