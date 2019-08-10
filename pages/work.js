import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../prismic.config'
import Meta from '../components/Meta'
import Template from '../templates/Work'

function Work({ data }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template data={data} />
    </>
  )
}

Work.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const work = await api.query(Prismic.Predicates.at('document.type', 'work'), {
    pageSize: 100,
  })

  return { data: { work } }
}

export default Work
