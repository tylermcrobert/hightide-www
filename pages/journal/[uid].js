import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic.config'
import JournalPage from '../../templates/JournalPage'

const Journal = ({ data }) => {
  return data ? <JournalPage data={data} /> : null
}

Journal.getInitialProps = async context => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const journal = await api.query(
    Prismic.Predicates.at('document.type', 'journal')
  )

  const journals = journal.results
  const uids = journals.map(item => item.uid)
  const { uid } = context.query
  const data = journals[uids.indexOf(uid)]

  return { data, journals, uids }
}

export default Journal
