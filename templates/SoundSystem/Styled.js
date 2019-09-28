import styled from 'styled-components'

const Track = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${props => props.theme.margins.slim};
  align-items: center;
  margin: 0.25rem 0;
`

const AlbumCoverWrapper = styled.div`
  ${'' /* height: 0;
  padding-top: 50%; */}

  img {
    height: 5rem;
    width: auto;
  }
`

export default { Track, AlbumCoverWrapper }
