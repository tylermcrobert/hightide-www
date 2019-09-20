import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/About'

export default function About({ data }) {
  return (
    <>
      <Template data={data} />
      <Meta title="About" url="about/" />
    </>
  )
}

About.getInitialProps = async ({ prismicApi }) => {
  const site = await prismicApi
    .getSingle('site', {
      fetchLinks: ['work.name', 'work.image'],
    })
    .then(item => item.data)

  const about = await prismicApi.getSingle('page_about')
  return { data: { ...about.data, site } }
}
