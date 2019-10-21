import React from 'react'
import { RichText } from 'prismic-reactjs'
import Error from 'next/error'

import { Client } from 'middleware/prismic'
import prerender from 'middleware/prerender'

import Meta from 'components/Meta'
import CaseStudyTemplate from 'templates/CaseStudy'

const CaseStudy = ({ data: response }) => {
  if (response) {
    return (
      <>
        <Meta
          title={RichText.asText(response.data.name)}
          image={response.data.image.url}
          url={`work/${response.uid}`}
        />
        <CaseStudyTemplate data={response.data} />
      </>
    )
  }
  return <Error statusCode={404} />
}

CaseStudy.getInitialProps = async ({ req, res, query }) => {
  const { uid } = query
  const data = await Client(req).getByUID('work', uid, {
    fetchLinks: ['work.name', 'work.image'],
  })

  prerender(res)
  return { data }
}

export default CaseStudy
