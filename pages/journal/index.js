import React from 'react'
import Prismic from 'prismic-javascript'
import JournalIndex from '../../templates/JournalIndex'
import { apiEndpoint, accessToken } from '../../prismic.config'

export default function Journal({ data }) {
  return <JournalIndex data={data} />
}

Journal.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const journal = await api.query(
    Prismic.Predicates.at('document.type', 'journal')
  )
  return { data: journal }
}
