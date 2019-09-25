import Prismic from 'prismic-javascript'

export const apiEndpoint = process.env.PRISMIC_ENDPOINT
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export const linkResolver = ({ uid, type }) => {
  if (type === 'work') {
    return `/work/${uid}`
  }
  return uid
}

// -- Client method to query Prismic
// Avoids reinitializing an API connection for every query, handling instead with a Client object
let frontClient

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient
  // Prevents generating new instances for client side since we don't need the refreshed request object.

  // Reinitializes Client only if there's a req object present, which is used for Previews
  const options = Object.assign(
    {},
    req ? { req } : {},
    accessToken ? { accessToken } : {}
  )
  // Connects to the given repository to facilitate data queries
  return Prismic.client(apiEndpoint, options)
}
