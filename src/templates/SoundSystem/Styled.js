import styled from 'styled-components'
import { mq } from 'style/theme'

const Columns = styled.div`
  @media ${mq.sm} {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`
const Track = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: ${props => props.theme.margins.slim};
  align-items: center;
  margin: 1.5rem 0;

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
