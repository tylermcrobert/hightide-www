import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import Error from 'next/error'
import { apiEndpoint, accessToken } from '../../prismic.config'
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
  const api = await Prismic.getApi(apiEndpoint, { accessToken })
  const work = await api.query(Prismic.Predicates.at('document.type', 'work'))
  const caseStudies = work.results
  const data = caseStudies[caseStudies.map(item => item.uid).indexOf(uid)]
  return { data }
}

export default Work
