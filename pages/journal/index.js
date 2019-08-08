import React from 'react'
import Prismic from 'prismic-javascript'
import Layout from '../../components/Layout'
import JournalIndex from '../../templates/JournalIndex'
import { apiEndpoint, accessToken } from '../../config/prismic'

export default function Journal({ data }) {
  return (
    <Layout>
      <JournalIndex data={data} />
    </Layout>
  )
}

Journal.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const journal = await api.query(
    Prismic.Predicates.at('document.type', 'journal')
  )
  return { data: journal }
}
