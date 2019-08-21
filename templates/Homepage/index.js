import React from 'react'
import { RichText } from 'prismic-reactjs'
import Arrow from '../../components/Arrow'
import Capabilities from '../../components/Capabilities'
import Instagram from '../../components/Instagram'
import Marquee from '../../components/Marquee'
import Styled from './Styled'
import { Wrap, Section } from '../../style'

function Homepage({ data }) {
  const { homepage, brand, work } = data
  const brands = brand.results.map(res => res.data.logo.url)
  const projects = work.results.map(item => item.data)
  const featuredProjects = projects.filter(item => item.featured === 'Featured')

  return (
    <>
      <Wrap>
        <Section.Large>
          <Styled.Intro>
            {RichText.asText(homepage.data.hero_text)}
          </Styled.Intro>
        </Section.Large>
        <Section>
          <FeaturedWork.Wrapper data={featuredProjects[0]} />
        </Section>
        <Section>
          <Header link={<a href="">See more capabilities</a>}>
            What We Do
          </Header>
          <Capabilities data={data.capacity} />
        </Section>
        <Section>
          <Header>Clients</Header>
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

function FeaturedWork({ name, img }) {
  return (
    <div>
      <Header link={<a href="">{name}</a>}>Featured Project</Header>
      <img src={img} alt="" />
    </div>
  )
}

FeaturedWork.Wrapper = ({ data }) => {
  return <FeaturedWork name={RichText.asText(data.name)} img={data.image.url} />
}

function Header({ children, link }) {
  return (
    <Styled.Header>
      <h5>{children}</h5>
      {link && (
        <h5>
          {link}
          <Arrow />
        </h5>
      )}
    </Styled.Header>
  )
}

export default Homepage
