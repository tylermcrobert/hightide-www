import getImageSize from 'util/getImageSize'

const DEFAULT_SIZE = `
  (max-width: 1200px) 1200w,
  '100vw'
`

const getResponsiveImage = (url, sizes = DEFAULT_SIZE) => {
  const src = getImageSize(url, { w: 1200 })

  const srcSet = `
    ${getImageSize(url, { w: 720 })} 320w,
    ${getImageSize(url, { w: 720 })} 720w,
    ${getImageSize(url, { w: 1200 })} 1200w,
    ${getImageSize(url, { w: 2400 })} 2400w,
  `

  return { src, srcSet, sizes }
}

export default getResponsiveImage
