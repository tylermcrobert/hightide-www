import React from 'react'
import JournalTemplate from 'templates/Journal'
import Meta from 'components/Meta'
import { getType } from 'middleware/prismic'

export default function Journal({ data }) {
  return (
    <>
      <Meta title="Journal" url="/journal/" />
      <JournalTemplate results={data.results} />
    </>
  )
}

Journal.getInitialProps = async ({ req }) => {
  const journal = await getType(req, 'journal', {
    orderings: '[my.journal.date desc]',
    // pageSize: 10,
  })

  return { data: journal }
}
