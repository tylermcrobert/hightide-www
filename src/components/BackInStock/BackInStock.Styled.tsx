import styled from 'styled-components'
import theme from 'style/theme'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${theme.margins.slim};
`

const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 110;
`

const Window = styled.div`
  width: 100%;
  max-width: 25rem;
  background: white;
  padding: ${theme.margins.standard} ${theme.margins.slim};
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default {
  ButtonWrap,
  Shadow,
  Wrapper,
  Window,
}
