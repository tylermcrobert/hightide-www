import React from 'react'
import { RichText } from 'prismic-reactjs'

import Capabilities from '../../components/Capabilities'
import Instagram from '../../components/Instagram'
import Marquee from '../../components/Marquee'
import Styled from './Styled'
import Section from '../../components/Section'
import { Wrap } from '../../style'
import FeaturedWork from '../../components/FeaturedWork'
import SectionHead from '../../components/SectionHead'

const Homepage = React.memo(({ data }) => {
  const siteData = data.site.data
  const brands = data.brand.results.map(res => res.data.logo.url)
  const featuredProjects = [siteData.featured_work_1, siteData.featured_work_2]
  const heroText = siteData.introduction

  return (
    <>
      <Wrap>
        <Section>
          <Styled.Intro>{RichText.asText(heroText)}</Styled.Intro>
        </Section>
        <HomeFeatureBlock data={featuredProjects[0]} />
        <Section>
          <SectionHead link={<a href="">See more capabilities</a>}>
            What We Do
          </SectionHead>
          <Capabilities data={data.capacity} />
        </Section>
        <Section>
          <SectionHead>Clients</SectionHead>
          <Marquee>
            <Styled.Grid cols={4}>
              {brands.map((item, i) => (
                <>
                  <img src={item} key={i} alt="" />
                </>
              ))}
            </Styled.Grid>
          </Marquee>
        </Section>
        <HomeFeatureBlock data={featuredProjects[1]} />
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
