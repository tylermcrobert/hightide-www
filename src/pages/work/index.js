import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Work'
import { Client } from 'middleware/prismic'

function Work({ site, tag }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template site={site} tag={tag} />
    </>
  )
}

Work.getInitialProps = async ({ req, query }) => {
  const site = await Client(req)
    .getSingle('site', {
      fetchLinks: ['work.name', 'work.image', 'work.thumbnail'],
    })
    .then(item => item.data)

  return { site, tag: query.tag }
}

export default Work
