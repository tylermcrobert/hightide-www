import Prismic from 'prismic-javascript'

export async function getApi() {
  const api = await Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
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
