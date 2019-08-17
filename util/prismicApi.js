import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../prismic.config'

export async function getApi() {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  return api
}

export async function getType(type, options) {
  const api = await getApi()
  return api.query(Prismic.Predicates.at('document.type', type), options)
}

export async function getSingle(type) {
  const api = await getApi()
  return api.getSingle(type)
}

export default null
