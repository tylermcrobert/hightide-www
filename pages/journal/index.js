import React from 'react'
import Prismic from 'prismic-javascript'
import JournalTemplate from '../../templates/Journal'
import { apiEndpoint, accessToken } from '../../prismic.config'
import Meta from '../../components/Meta'

function byDate(a, b) {
  return new Date(b.data.date) - new Date(a.data.date)
}

export default function Journal({ data }) {
  const sortedData = { ...data, results: data.results.sort(byDate) }

  return (
    <>
      <Meta title="Journal" url="/journal/" />
      <JournalTemplate data={sortedData} />
    </>
  )
}

Journal.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const journal = await api.query(
    Prismic.Predicates.at('document.type', 'journal'),
    { orderings: '[document.data.date desc]' }
  )

  return { data: journal }
}
