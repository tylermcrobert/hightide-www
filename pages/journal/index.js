import React from 'react'
import Prismic from 'prismic-javascript'
import JournalTemplate from '../../templates/Journal'
import { apiEndpoint, accessToken } from '../../prismic.config'
import Meta from '../../components/Meta'

export default function Journal({ data }) {
  return (
    <>
      <Meta title="Journal" url="/journal/" />
      <JournalTemplate data={data} />
    </>
  )
}

Journal.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const journal = await api.query(
    Prismic.Predicates.at('document.type', 'journal')
  )
  return { data: journal }
}
