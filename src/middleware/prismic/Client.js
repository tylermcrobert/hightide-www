import Prismic from 'prismic-javascript'
import { accessToken, apiEndpoint } from './credentials'

/**
 * Client method for querying prismic
 * Avoids reinitializing an API connection for every query, handling
 * instead with a Client object
 *
 * https://github.com/prismicio/nextjs-blog/blob/c595e3ecc694b227864b5297be25b9c302620e34/prismic-configuration.js
 *
 */


let frontClient

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient

  const options = { ...(req ? { req } : {}), accessToken }
  return Prismic.client(apiEndpoint, options)
}
