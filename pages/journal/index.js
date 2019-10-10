import React from 'react'
import JournalTemplate from 'templates/Journal'
import Meta from 'components/Meta'
import { getType } from 'middleware/prismic'

export default function Journal({ journal, pageSize }) {
  return (
    <>
      <Meta title="Journal" url="/journal/" />
      <JournalTemplate
        page={journal.page}
        totalPages={journal.total_pages}
        results={journal.results}
        pageSize={pageSize}
      />
    </>
  )
}

export const pageSize = 12

export const fetchOptions = {
  orderings: '[my.journal.date desc]',
  pageSize,
}

Journal.getInitialProps = async ({ req }) => {
  const journal = await getType(req, 'journal', fetchOptions)

  return { journal, pageSize }
}
