import React from 'react'
import Meta from '../components/Meta'
import { getCapabilityData } from '../components/Capabilities'
import Template from '../templates/About'

export default function About({ data }) {
  return (
    <>
      <Template data={data} />
      <Meta title="About" url="about/" />
    </>
  )
}

About.getInitialProps = async ({ prismicApi }) => {
  const about = await prismicApi.getSingle('page_about')
  const capabilites = await getCapabilityData(prismicApi)
  return { data: { ...about.data, capabilites } }
}
