import React from 'react'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'
import Styled from './Styled'

function SoundSystem({ tracks, spotifyData }) {
  return (
    <Wrap>
      <a href={spotifyData.url} target="_blank" rel="noopener noreferrer">
        <Section>
          <Heading as="h1">{spotifyData.title}</Heading>
        </Section>
      </a>
      <Section>
        <ul>
          {tracks.map(({ track }, index) => {
            const albumCover = track.album.images[0].url
            const artists = track.artists.map(artist => artist.name).join(', ')
            return (
              <Track
                number={index + 1}
                name={track.name}
                albumCover={albumCover}
                artists={artists}
              />
            )
          })}
        </ul>
      </Section>
    </Wrap>
  )
}

const Track = ({ albumCover, number, artists, name }) => {
  return (
    <Styled.Track>
      <Styled.AlbumCoverWrapper>
        <img src={albumCover} alt="" />
      </Styled.AlbumCoverWrapper>
      <div>
        <div>
          <strong>{name}</strong>
        </div>
        <div>{artists}</div>
      </div>
    </Styled.Track>
  )
}

// SoundSystem.propTypes = {}

export default SoundSystem
