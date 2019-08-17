import React from 'react'
import Meta from '../../components/Meta'
import Template from '../../templates/Work'
import * as prismicApi from '../../util/prismicApi'

function Work({ data }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template data={data} />
    </>
  )
}

Work.getInitialProps = async () => {
  const work = await prismicApi.getType('work', { pageSize: 100 })
  return { data: { work } }
}

export default Work
