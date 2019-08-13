const Prismic = require('prismic-javascript')
const withFonts = require('next-fonts')
const { apiEndpoint, accessToken } = require('./prismic.config')
require('dotenv').config()

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

    const api = await Prismic.getApi(apiEndpoint, { accessToken })
    const journal = await api.query(
      Prismic.Predicates.at('document.type', 'journal')
    )

    const journalUids = journal.results.map(result => result.uid)

    journalUids.forEach(uid => {
      paths[`/journal/${uid}`] = { page: '/journal/[uid]', query: { uid } }
    })

    return paths
  },
})
