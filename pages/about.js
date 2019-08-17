import React from 'react'
import Meta from '../components/Meta'
import Template from '../templates/About'
import * as prismicApi from '../util/prismicApi'

export default function About({ data }) {
  return (
    <>
      <Template data={data} />
      <Meta title="About" url="about/" />
    </>
  )
}

About.getInitialProps = async () => {
  const about = await prismicApi.getSingle('page_about')
  return { data: { ...about.data } }
}
