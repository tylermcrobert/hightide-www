require('dotenv').config()

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

exports.handler = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'Hello World',
  })
}
