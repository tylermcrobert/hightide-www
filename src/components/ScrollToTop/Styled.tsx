import styled from 'styled-components'

const ScrollToTop = styled.div`
  position: fixed;
  bottom: ${props => props.theme.margins.standard};
  right: ${props => props.theme.margins.standard};
  z-index: 40;
  cursor: pointer;
`

export default {
  ScrollToTop,
}
