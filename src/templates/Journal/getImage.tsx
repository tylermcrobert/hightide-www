import getImageSize from 'util/getImageSize'
import { PrismicImage } from 'types'
/**
 * Get approrpriate image
 */

interface GetImageProps {
  mainImg: PrismicImage
  thumbnail: PrismicImage
  portrait: PrismicImage
  isLarge: boolean
}
export default function getImage({
  mainImg,
  thumbnail,
  portrait,
  isLarge,
}: GetImageProps): string {
  if (isLarge && portrait.url) {
    return getImageSize(portrait.url, {
      w: 1200,
      ar: 0.691,
      fit: 'crop',
    })
  }

  if (thumbnail.url) {
    return getImageSize(thumbnail.url, {
      w: 1200,
      ar: 3 / 2,
      fit: 'crop',
    })
  }

  return mainImg.url ? mainImg.url : ''
}
