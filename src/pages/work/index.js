import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Work'
import { Client } from 'middleware/prismic'

function Work({ site }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template site={site} />
    </>
  )
}

Work.getInitialProps = async ({ req }) => {
  const site = await Client(req)
    .getSingle('site', {
      fetchLinks: ['work.name', 'work.image'],
    })
    .then(item => item.data)

  return { site }
}

export default Work
