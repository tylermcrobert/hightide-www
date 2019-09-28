import { Client } from 'util/prismic'
import Meta from 'components/Meta'
import { RichText } from 'prismic-reactjs'
import SoundSystemTemplate from 'templates/SoundSystem'
import Error from 'next/error'

export default function SoundSystem({ spotifyData, spotifyRes, prismicRes }) {
  if (prismicRes && spotifyRes) {
    const tracks = spotifyRes.tracks.items
    const image = prismicRes.data.image.url || spotifyRes.images[0].url

    return (
      <>
        <Meta
          title={RichText.asText(prismicRes.data.title)}
          image={image}
          url={`journal/sound-system/${prismicRes.uid}`}
        />
        <SoundSystemTemplate
          tracks={tracks}
          data={prismicRes.data}
          image={image}
          spotifyData={spotifyData}
        />
      </>
    )
  }
  return <Error statusCode={404} />
}

SoundSystem.getInitialProps = async ({ req, query }) => {
  try {
    const { uid } = query
    const soundSystem = await Client(req).getByUID('sound_system', uid)
    const spotifyData = SoundSystem.parsePrismicSpotifyData(soundSystem)

    const API_ROUTE =
      'https://tm-hightide.netlify.com/.netlify/functions/getSpotifyAuth'

    const spotifyRes = await fetch(`${API_ROUTE}?id=${spotifyData.id}`)
      .then(res => res.json())
      .then(data => data.body)

    return { prismicRes: soundSystem, spotifyData, spotifyRes }
  } catch (err) {
    console.error(err)
    return {}
  }
}

SoundSystem.parsePrismicSpotifyData = res => {
  try {
    const playlistData = res.data.playlist_link
    const playlistUrl = playlistData.embed_url
    const { title } = playlistData
    const id = playlistUrl.split('/playlist/')[1].split('?')[0]
    return { url: playlistUrl, title, id }
  } catch (err) {
    console.error(err)
    return null
  }
}
