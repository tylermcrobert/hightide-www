require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:9000/getSpotifyAuth',
})

async function getAccessToken() {
  const res = await spotifyApi.clientCredentialsGrant()
  return res.body.access_token
}

export default async (req, res) => {
  const { id } = req.query

  if (id) {
    const token = await getAccessToken()
    spotifyApi.setAccessToken(token)

    console.log({ token })

    try {
      const playlist = await spotifyApi.getPlaylist(id)
      res.status(200).json(playlist)
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    res.status(401).json({ error: 'ID field is required' })
  }
}
