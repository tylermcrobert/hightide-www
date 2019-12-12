import getImageSize from 'util/getImageSize'
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
      return getImageSize(thumbnail.portrait.url, { w: 1200, ar: 0.691 })
    }

    /**
     * Catch-all for thumbnails
     */
    return thumbnail.url
  }

  return mainImg
}
