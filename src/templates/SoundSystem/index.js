import React, { memo } from 'react'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import msToTime from 'util/msToTime'
import { RelatedWrapper, RelatedItem } from 'components/Related'
import Styled from './Styled'
import { getValidRelatedJournals } from '../Post'

const SoundSystem = memo(
  ({ tracks, playlistLink, spotifyImage, prismicData }) => {
    const PlaylistLink = memo(({ children }) => (
      <a href={playlistLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ))

    return (
      <>
        <Wrap>
          <Styled.Columns>
            {/* Info */}
            <Section>
              <PlaylistLink>
                <Styled.PlaylistCover
                  src={prismicData.main_image.url || spotifyImage}
                  alt=""
                />
              </PlaylistLink>
              <Heading as="h1">{RichText.asText(prismicData.title)}</Heading>
              <TextWrap>{RichText.render(prismicData.abstract)}</TextWrap>
              <PlaylistLink>
                <strong>Follow Playlist</strong>
              </PlaylistLink>
            </Section>
            {/* Tracks */}
            <Section>
              <Tracks items={tracks} />
            </Section>
          </Styled.Columns>
        </Wrap>
        <RelatedItems items={prismicData.related_journals} />
      </>
    )
  }
)

const RelatedItems = ({ items }) => {
  const validItems = getValidRelatedJournals(items)

  if (validItems && validItems.length) {
    return (
      <RelatedWrapper heading="Related Playlists">
        {validItems.map(({ entry }) => {
          if (entry.data) {
            const title = RichText.asText(entry.data.title)
            const image = entry.data.main_image.url
            return (
              <RelatedItem
                title={title}
                key={entry.id}
                src={image}
                link="/journal/[uid]"
                as={`/journal/${entry.uid}`}
              />
            )
          }
          return null
        })}
      </RelatedWrapper>
    )
  }
  return null
}

const Tracks = ({ items }) => {
  return (
    <ul>
      {items.map(({ track }) => {
        const albumCover = track.album.images[0] && track.album.images[0].url
        const artists = track.artists.map(artist => artist.name).join(', ')
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
  )
}

const Track = ({ albumCover, artists, name, duration }) => {
  return (
    <Styled.Track>
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
