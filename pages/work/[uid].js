import React from 'react'
import { RichText } from 'prismic-reactjs'
import Error from 'next/error'
import * as prismicApi from '../../util/prismicApi'
import Meta from '../../components/Meta'
import CaseStudy from '../../templates/CaseStudy'

const Work = ({ data: response }) => {
  if (response) {
    return (
      <>
        <Meta
          title={RichText.asText(response.data.name)}
          image={response.data.image.url}
          url={`work/${response.uid}`}
        />
        <CaseStudy data={response.data} />
      </>
    )
  }
  return <Error statusCode={404} />
}

Work.getInitialProps = async context => {
  const { uid } = context.query
  const work = await prismicApi.getType('work')
  const caseStudies = work.results
  const data = caseStudies[caseStudies.map(item => item.uid).indexOf(uid)]
  return { data }
}

export default Work
