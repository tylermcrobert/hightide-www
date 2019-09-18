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

function Homepage({ data }) {
  const { homepage, brand, work } = data
  const brands = brand.results.map(res => res.data.logo.url)
  const projects = work.results.map(item => item.data)
  const featuredProjects = projects.filter(item => item.featured === 'Featured')

  return (
    <>
      <Wrap>
        <Section>
          <Styled.Intro>
            {RichText.asText(homepage.data.hero_text)}
          </Styled.Intro>
        </Section>
        {/* </Wrap> */}
        <Section>
          <FeaturedWork.Wrapper data={featuredProjects[0]} />
        </Section>
        {/* <Wrap> */}
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
        <Section>
          <FeaturedWork.Wrapper data={featuredProjects[1]} />
        </Section>
        <Section>
          <Instagram apiResponse={data.instagramData} />
        </Section>
      </Wrap>
    </>
  )
}

export default Homepage
