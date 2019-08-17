import React from 'react'
import JournalTemplate from '../../templates/Journal'
import * as prismicApi from '../../util/prismicApi'
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
  const options = { orderings: '[document.data.date desc]' }
  const journal = await prismicApi.getType('journal', options)
  return { data: journal }
}
