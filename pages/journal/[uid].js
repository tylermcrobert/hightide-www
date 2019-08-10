import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import { apiEndpoint, accessToken } from '../../prismic.config'
import JournalPage from '../../templates/JournalPage'
import formatTitle from '../../util/formatTitle'

const Journal = ({ data }) => {
  if (data) {
    const postImg = data.data.main_image.url
    const title = formatTitle(RichText.asText(data.data.title))
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="og:image" content={postImg} />
          <meta name="twitter:image" content={postImg} />
        </Head>
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
