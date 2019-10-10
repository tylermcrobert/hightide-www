import React from 'react'
import { RichText } from 'prismic-reactjs'

import Capabilities from 'components/prismic/Capabilities'
import Clients from 'components/prismic/Clients'
import Careers from 'components/prismic/Careers'

import PageIntro from 'components/PageIntro'
import Instagram from 'components/Instagram'
import Section from 'components/Section'
import FeaturedWork from 'components/FeaturedWork'
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
        <HomeFeatureBlock data={featuredCaseStudies[0]} />
        <Capabilities data={capacities} />
        <Clients items={clients} />
        <HomeFeatureBlock data={featuredCaseStudies[1]} />
        <Careers data={careers} />
        <Instagram apiResponse={data.instagramData} />
      </Wrap>
    </>
  )
})

function HomeFeatureBlock({ data }) {
  if (data.isBroken === false) {
    return (
      <Section>
        <FeaturedWork.Wrapper data={data} />
      </Section>
    )
  }
  return null
}
export default Homepage
