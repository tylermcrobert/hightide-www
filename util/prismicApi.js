import Prismic from 'prismic-javascript'

export async function getApi() {
  console.log('getApi() called')

  const api = await Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  api.getType = async (type, options) => {
    return api.query(Prismic.Predicates.at('document.type', type), options)
  }

  return api
}

export default null
