import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Work'

function Work({ data }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template data={data} />
    </>
  )
}

Work.getInitialProps = async ({ prismicApi }) => {
  const work = await prismicApi.getType('work', { pageSize: 10 })
  return { data: { work } }
}

export default Work
