require('dotenv').config()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SpotifyWebApi = require('spotify-web-api-node')

export default async (req, res) => {
  const { id } = req.query

  if (id) {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: 'http://localhost:9000/getSpotifyAuth',
    })

    spotifyApi
      .clientCredentialsGrant()
      .then(data => {
        spotifyApi.setAccessToken(data.body.access_token)
        console.log('TOKEN', data.body.access_token)

        spotifyApi
          .getPlaylist(id)
          .then(playlistData => {
            res.status(200).json(playlistData.body)
          })
          .catch(err => {
            res.status(err.statusCode).json(err)
          })
      })
      .catch(err => res.status(err.statusCode).json(err))
  } else {
    res.status(401).json({ error: 'ID field is required' })
  }
}
