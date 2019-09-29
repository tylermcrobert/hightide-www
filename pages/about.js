import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/About'
import { Client } from 'util/prismic'

export default function About({ site }) {
  return (
    <>
      <Meta title="About" url="about/" />
      <Template site={site} />
    </>
  )
}

About.getInitialProps = async ({ req }) => {
  const site = await Client(req)
    .getSingle('site', {
      fetchLinks: ['work.name', 'work.image'],
    })
    .then(item => item.data)

  return { site }
}
