import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/About'
import { Client } from 'util/prismic'

export default function About({ data }) {
  return (
    <>
      <Template data={data} />
      <Meta title="About" url="about/" />
    </>
  )
}

About.getInitialProps = async ({ req }) => {
  const site = await Client(req)
    .getSingle('site', {
      fetchLinks: ['work.name', 'work.image'],
    })
    .then(item => item.data)

  const about = await Client(req).getSingle('page_about')
  return { data: { ...about.data, site } }
}
