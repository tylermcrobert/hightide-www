import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Work'
import { getType } from 'middleware/prismic'

function Work({ data }) {
  return (
    <>
      <Meta title="Work" url="work/" />
      <Template data={data} />
    </>
  )
}

Work.getInitialProps = async ({ req }) => {
  const data = await getType(req, 'work', { pageSize: 10 })

  return { data }
}

export default Work
