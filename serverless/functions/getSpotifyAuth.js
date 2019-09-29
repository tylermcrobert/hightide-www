require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:9000/getSpotifyAuth',
})

exports.handler = (event, context, callback) => {
  const { id } = event.queryStringParameters

  async function getAccessToken() {
    try {
      const res = await spotifyApi.clientCredentialsGrant()
      return res.body.access_token
    } catch (err) {
      callback(null, {
        statusCode: err.statusCode,
        body: err.message,
      })
      return null
    }
  }

  getAccessToken()
    .then(token => {
      spotifyApi.setAccessToken(token)

      if (!id) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ token }),
        })
        return null
      }

      spotifyApi
        .getPlaylist(id)
        .then(data => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(data),
          })
        })
        .catch(err => {
          callback(null, {
            statusCode: err.statusCode,
            body: err.message,
          })
        })
      return null
    })
    .catch(err => {
      console.error(err)
    })
}
