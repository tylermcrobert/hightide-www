import React from 'react'
import { RichText } from 'prismic-reactjs'

import Capabilities from 'components/prismic/Capabilities'
import Instagram from 'components/Instagram'
import Section from 'components/Section'
import FeaturedWork from 'components/FeaturedWork'
import Clients from 'components/prismic/Clients'
import { Wrap } from 'style'
import Careers from 'components/prismic/Careers'
import Styled from './Styled'

const Homepage = React.memo(({ data }) => {
  const siteData = data.site.data
  const featuredProjects = [siteData.featured_work_1, siteData.featured_work_2]
  const heroText = siteData.introduction
  const { careers, clients, capacities } = siteData

  return (
    <>
      <Wrap>
        <Section>
          <Styled.Intro>{RichText.asText(heroText)}</Styled.Intro>
        </Section>
        <HomeFeatureBlock data={featuredProjects[0]} />
        <Capabilities data={capacities} />
        <Clients items={clients} />
        <HomeFeatureBlock data={featuredProjects[1]} />
        <Careers data={careers} />
        <Section>
          <Instagram apiResponse={data.instagramData} />
        </Section>
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
