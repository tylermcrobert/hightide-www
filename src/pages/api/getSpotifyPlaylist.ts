/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const fetch = require('isomorphic-unfetch')

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

const getAuthToken = async () => {
  const base64Auth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const data = await fetch(
    'https://accounts.spotify.com/api/token?grant_type=client_credentials',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

        Authorization: `Basic ${base64Auth}`,
      },
    }
  )
  const { access_token: token } = await data.json()

  return token
}

const getPlaylist = async ({ id, token }: { id: string; token: string }) => {
  const data = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const json = await data.json()
  return json
}

export default async (req, res) => {
  const { id } = req.query

  if (id) {
    const token = await getAuthToken()
    const playlistData = await getPlaylist({ id, token })

    res.status(200).json(playlistData)
  } else {
    res.status(401).json({ error: 'ID field is required' })
  }
}
