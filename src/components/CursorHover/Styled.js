import styled from 'styled-components'

const HoverText = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;

  font-size: ${props => props.theme.fontSizes[4]};
  color: white;

  user-select: none;
  mix-blend-mode: difference;
`

HoverText.Inner = styled.div`
  transform: translate3d(-50%, -50%, 0);
`

const HoverWrapper = styled.div`
  cursor: none;
  overflow: hidden;
`
export default { HoverText, HoverWrapper }
