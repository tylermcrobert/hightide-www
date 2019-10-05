import React, { memo } from 'react'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import msToTime from 'util/msToTime'
import Styled from './Styled'

const SoundSystem = memo(
  ({ tracks, playlistLink, spotifyImage, prismicData }) => {
    const PlaylistLink = memo(({ children }) => (
      <a href={playlistLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ))
    return (
      <Wrap>
        <Styled.Columns>
          <Section>
            <PlaylistLink>
              <Styled.PlaylistCover src={spotifyImage} alt="" />
            </PlaylistLink>
            <Heading as="h1">{RichText.asText(prismicData.title)}</Heading>
            <TextWrap>{RichText.render(prismicData.abstract)}</TextWrap>
            <PlaylistLink>
              <strong>Follow Playlist</strong>
            </PlaylistLink>
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
  }
)

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
