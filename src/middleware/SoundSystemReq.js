const getPlaylistLink = link => link.split('/playlist/')[1].split('?')[0]
const API_ROUTE = 'https://hightidenyc.com/api/getSpotifyPlaylist'
/**
 * handle sound system
 */
export default class SoundSystemReq {
  /**
   * Recieve Journal info and parse  out link and id
   */
  constructor(journal) {
    const { data } = journal
    const spotifyField = data.spotify_link

    /**
     * Set playlist link and id from prismic
     */

    if (spotifyField.embed_url) {
      this.playlistLink = spotifyField.embed_url
      this.playlistId = getPlaylistLink(this.playlistLink)
    }
  }

  /**
   * Fetch playlist details from spotify
   * @return {Promise}
   */
  async fetch() {
    try {
      const apiRes = await fetch(
        `${API_ROUTE}?id=${this.playlistId}`
      ).then(res => res.json())

      this.spotifyName = apiRes.name
      this.spotifyDesc = apiRes.description
      this.playlistLink = apiRes.external_urls.spotify
      this.spotifyImage = apiRes.images[0].url
      this.tracks = apiRes.tracks.items

      return apiRes
    } catch (err) {
      console.log(err)

      return null
    }
  }
}
