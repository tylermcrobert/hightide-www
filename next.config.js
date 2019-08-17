const Prismic = require('prismic-javascript')
const withFonts = require('next-fonts')
require('dotenv').config()

async function getUids(type, api) {
  const res = await api.query(Prismic.Predicates.at('document.type', type))
  return res.results.map(result => result.uid)
}

module.exports = withFonts({
  env: {
    INSTAGRAM_ENDPOINT: process.env.INSTAGRAM_ENDPOINT,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
  },
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
      '/journal': { page: '/journal' },
    }

    const api = await Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    })

    /* Generate journal pages */

    const journalUids = await getUids('journal', api)
    journalUids.forEach(uid => {
      paths[`/journal/${uid}`] = { page: '/journal/[uid]', query: { uid } }
    })

    /* Generate case studies */
    const workUids = await getUids('work', api)
    workUids.forEach(uid => {
      paths[`/work/${uid}`] = { page: '/work/[uid]', query: { uid } }
    })

    return paths
  },
})
