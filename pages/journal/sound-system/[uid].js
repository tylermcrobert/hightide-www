import fetch from 'isomorphic-unfetch'
import { Client } from 'util/prismic'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'

export default function Journal({ res, spotifyData, playlistData }) {
  console.log({ playlistData })
  return (
    <Wrap>
      <a href={spotifyData.url} target="_blank" rel="noopener noreferrer">
        <Section>
          <Heading as="h1">{spotifyData.title}</Heading>
        </Section>
      </a>
    </Wrap>
  )
}

Journal.getInitialProps = async ({ req, query }) => {
  const { uid } = query
  const soundSystem = await Client(req).getByUID('sound_system', uid)
  const spotifyData = Journal.parsePrismicSpotifyData(soundSystem)
  const playlistData = await Journal.fetchPlaylistData(spotifyData.id)
  return { res: soundSystem, spotifyData, playlistData }
}

/**
 * Fetch songs from Spotify API
 */

const API_ENDPOINT = 'https://api.spotify.com/v1/playlists'

Journal.fetchPlaylistData = id => {
  fetch(`${API_ENDPOINT}/${id}`).then(res => {
    console.log(res)
    return res
  })
}

/**
 * Returns Playlist name, url, id from OEMBED
 */

Journal.parsePrismicSpotifyData = res => {
  if (res && res.data) {
    const playlistData = res.data.playlist_link
    const playlistUrl = playlistData.embed_url
    const { title } = playlistData
    const id = playlistUrl.split('/playlist/')[1].split('?')[0]
    return { url: playlistUrl, title, id }
  }
  return null
}
