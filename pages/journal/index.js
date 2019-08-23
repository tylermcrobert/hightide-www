import React from 'react'
import JournalTemplate from '../../templates/Journal'
import Meta from '../../components/Meta'

export default function Journal({ data }) {
  return (
    <>
      <Meta title="Journal" url="/journal/" />
      <JournalTemplate data={data} />
    </>
  )
}

Journal.getInitialProps = async ({ prismicApi }) => {
  const journal = await prismicApi.getType('journal', {
    orderings: '[my.journal.date desc]',
    // pageSize: 6,
  })
  return { data: journal }
}
