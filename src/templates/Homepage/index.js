import React from 'react'
import { RichText } from 'prismic-reactjs'

import Capabilities from 'components/prismic/Capabilities'
import Clients from 'components/prismic/Clients'
import Careers from 'components/prismic/Careers'

import PageIntro from 'components/PageIntro'
import Instagram from 'components/Instagram'
import Section from 'components/Section'
import FeaturedWork from 'components/prismic/FeaturedWork'
import { Wrap } from 'style'

const Homepage = React.memo(({ data }) => {
  const siteData = data.site.data
  const heroText = siteData.introduction
  const { careers, clients, capacities } = siteData

  const featuredCaseStudies = siteData.featured_case_studies.map(
    item => item.case_study
  )

  return (
    <>
      <Wrap>
        <PageIntro>{RichText.render(heroText)}</PageIntro>
        <HomeFeatureBlock
          heading={siteData.featured_text_header}
          caseStudies={featuredCaseStudies}
        />
        <Capabilities data={capacities} />
        <Clients items={clients} speed={siteData.clients_speed} />
        <Careers data={careers} />
        <Instagram images={data.instagramData} />
      </Wrap>
    </>
  )
})

function HomeFeatureBlock({ caseStudies, heading }) {
  if (caseStudies && caseStudies.length) {
    return (
      <Section>
        <FeaturedWork heading={heading} caseStudies={caseStudies} />
      </Section>
    )
  }
  return null
}

export default Homepage
