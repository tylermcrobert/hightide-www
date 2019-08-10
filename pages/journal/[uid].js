import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { apiEndpoint, accessToken } from '../../prismic.config'
import JournalPage from '../../templates/JournalPage'
import Meta from '../../components/Meta'

const Journal = ({ data }) => {
  if (data) {
    const postImg = data.data.main_image.url
    const thumnail = data.data.thumbnail_image.url

    const title = RichText.asText(data.data.title)

    return (
      <>
        <Meta title={title} image={thumnail || postImg} />
        <JournalPage data={data} />
      </>
    )
  }
  return null
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
