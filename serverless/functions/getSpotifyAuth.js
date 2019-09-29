require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:9000/getSpotifyAuth',
})

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-Width, Content-Type, Accept',
}

exports.handler = (event, context, callback) => {
  const { id } = event.queryStringParameters

  /**
   * Get access token from Spotify
   */
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

  /**
   * code to run after token has been recieved
   */
  getAccessToken()
    .then(token => {
      spotifyApi.setAccessToken(token)

      /**
       * If no id is provided, provide user with access token
       */
      if (!id) {
        callback(null, {
          statusCode: 200,
          headers: { ...CORS },
          body: JSON.stringify({ token }),
        })
        return null
      }

      /**
       * If ID is provided, return track details
       */
      spotifyApi
        .getPlaylist(id)
        .then(data => {
          callback(null, {
            statusCode: 200,
            headers: { ...CORS },
            body: JSON.stringify(data),
          })
        })

        /**
         * If ID request has an error, return it
         */
        .catch(err => {
          callback(null, {
            statusCode: err.statusCode,
            headers: { ...CORS },
            body: err.message,
          })
        })
      return null
    })
    .catch(err => {
      console.error(err)
    })
}
