/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('isomorphic-unfetch')

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

/**
 * Fetches API token using Spotify's
 * Client Credentials Flow
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */

const getAuthToken = async () => {
  const authFormatted = `${clientId}:${clientSecret}`
  const base64Auth = Buffer.from(authFormatted).toString('base64')

  const data = await fetch(
    'https://accounts.spotify.com/api/token?grant_type=client_credentials',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64Auth}`,
      },
    }
  ).then(res => res.json())
  return data.access_token
}

/**
 * Get Spotify Playlist
 */
const getPlaylist = async ({ id, token }: { id: string; token: string }) => {
  const data = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json())

  return data
}

/**
 * Main
 */

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
