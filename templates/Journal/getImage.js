/**
 * Get approrpriate image
 */
export default function getImage({ mainImg, thumbnail, large }) {
  if (thumbnail.url) {
    /**
     * If image block happens to be large,
     * use portrait if it exists
     */
    if (large && thumbnail.portrait) {
      return thumbnail.portrait.url
    }

    /**
     * Catch-all for thumbnails
     */
    return thumbnail.url
  }

  return mainImg
}
