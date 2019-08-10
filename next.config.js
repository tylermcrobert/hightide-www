const Prismic = require('prismic-javascript')
const withFonts = require('next-fonts')
const { apiEndpoint, accessToken } = require('./prismic.config')

module.exports = withFonts({
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
