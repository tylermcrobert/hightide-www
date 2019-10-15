import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: 100%;
  overflow: hidden;
`

const Track = styled.div`
  min-width: 200%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
`
export default { Wrapper, Track }
