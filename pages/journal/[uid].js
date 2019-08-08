import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../config/prismic'
import JournalPage from '../../templates/JournalPage'
import Layout from '../../components/Layout'

const Journal = ({ data }) => {
  return (
    <Layout>
      <JournalPage data={data} />{' '}
    </Layout>
  )
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
