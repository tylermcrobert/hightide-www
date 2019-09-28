import React, { memo } from 'react'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import msToTime from 'util/msToTime'
import Styled from './Styled'

const SoundSystem = memo(({ tracks, spotifyData, data, image }) => {
  return (
    <Wrap>
      <Styled.Columns>
        <Section>
          <Styled.PlaylistCover src={image} alt="" width="50px" />
          <Heading as="h1">{spotifyData.title}</Heading>
          <TextWrap>{RichText.render(data.description)}</TextWrap>
          <a href={spotifyData.url} target="_blank" rel="noopener noreferrer">
            <strong>Follow Playlist</strong>
          </a>
        </Section>
        <Section>
          <ul>
            {tracks.map(({ track }) => {
              const albumCover = track.album.images[0].url
              const artists = track.artists
                .map(artist => artist.name)
                .join(', ')
              const duration = msToTime(track.duration_ms)
              return (
                <Track
                  key={track.name}
                  name={track.name}
                  albumCover={albumCover}
                  artists={artists}
                  duration={duration}
                />
              )
            })}
          </ul>
        </Section>
      </Styled.Columns>
    </Wrap>
  )
})

const Track = ({ albumCover, artists, name, duration }) => {
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
      <div>{duration}</div>
    </Styled.Track>
  )
}

// SoundSystem.propTypes = {}

export default SoundSystem
