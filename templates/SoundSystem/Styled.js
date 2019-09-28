import styled from 'styled-components'

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4rem;
`
const Track = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${props => props.theme.margins.slim};
  align-items: center;
  margin: 0.25rem 0;

  font-size: ${props => props.theme.fontSizes[1]};
`

const AlbumCoverWrapper = styled.div`
  ${'' /* height: 0;
  padding-top: 50%; */}

  img {
    height: 3rem;
    width: auto;
  }
`

export default { Track, AlbumCoverWrapper, Columns }
