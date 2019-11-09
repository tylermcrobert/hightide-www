import queryString from 'query-string'

const DEFAULT_SETTINGS = { w: 2400, format: 'jpg' }

const getImageSize = (url, settings = DEFAULT_SETTINGS) => {
  const parsedUrl = queryString.parseUrl(url)
  const baseUrl = parsedUrl.url
  const newQuery = queryString.stringify(settings)

  return `${baseUrl}?${newQuery}`
}

export default getImageSize
