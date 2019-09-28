import { Client } from 'util/prismic'
import Heading from 'components/Heading'
import Section from 'components/Section'
import { Wrap } from 'style'
import { RichText } from 'prismic-reactjs'

export default function Journal({ res, spotifyData }) {
  const items = res.data.playlist_items

  return (
    <Wrap>
      <a href={spotifyData.url} target="_blank" rel="noopener noreferrer">
        <Section>
          <Heading as="h1">{spotifyData.title}</Heading>
        </Section>
      </a>
      <Section>
        <ul>
          {items.map(({ song_title: title, artist }) => {
            return (
              <li>
                <strong>{RichText.asText(title)}</strong> -{' '}
                {RichText.asText(artist)}
              </li>
            )
          })}
        </ul>
      </Section>
    </Wrap>
  )
}

Journal.getInitialProps = async ({ req, query }) => {
  const { uid } = query
  const soundSystem = await Client(req).getByUID('sound_system', uid)
  const spotifyData = Journal.parsePrismicSpotifyData(soundSystem)
  return { res: soundSystem, spotifyData }
}

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
