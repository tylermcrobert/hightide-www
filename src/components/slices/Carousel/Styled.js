import styled from 'styled-components'

const Image = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: ${props => props.aspect * 100}%;
  background-image: url(${props => props.src});
  background-position: center;
  display: ${props => (props.active ? 'block' : 'none')};
`

const FpoNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 1rem;
  & > div {
    cursor: pointer;
  }
`
export default { Image, FpoNav }
