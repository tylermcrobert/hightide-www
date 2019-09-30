import styled from 'styled-components'
import { mq } from 'style/theme'

const Columns = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media ${mq.sm} {
    grid-template-columns: 1fr 2fr;
  }

  h1 {
    width: 80%;
  }
`
const Track = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: ${props => props.theme.margins.slim};
  align-items: center;
  margin: 1rem 0;

  &:nth-child(1) {
    margin-top: 0;
  }
  font-size: ${props => props.theme.fontSizes[1]};
`

const PlaylistCover = styled.img`
  margin-bottom: 1rem;
`

const AlbumCoverWrapper = styled.div`
  img {
    height: 3rem;
    width: auto;
  }
`

export default { Track, AlbumCoverWrapper, Columns, PlaylistCover }
