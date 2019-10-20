import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Work'
import { getType } from 'middleware/prismic'
import prerender from 'middleware/prerender'

function Work({ data }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template data={data} />
    </>
  )
}

Work.getInitialProps = async ({ req, res }) => {
  const data = await getType(req, 'work', { pageSize: 10 })
  prerender(res)
  return { data }
}

export default Work
