import { Client } from 'util/prismic'

import SoundSystemTemplate from 'templates/SoundSystem'

export default function Journal({ spotifyData, tracks }) {
  return <SoundSystemTemplate tracks={tracks} spotifyData={spotifyData} />
}

Journal.getInitialProps = async ({ req, query }) => {
  const { uid } = query
  const soundSystem = await Client(req).getByUID('sound_system', uid)
  const spotifyData = Journal.parsePrismicSpotifyData(soundSystem)

  const API_ROUTE =
    'https://tm-hightide.netlify.com/.netlify/functions/getSpotifyAuth'

  const tracks = await fetch(`${API_ROUTE}?id=${spotifyData.id}`)
    .then(res => res.json())
    .then(data => data.body.tracks.items)

  return { res: soundSystem, spotifyData, tracks }
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
