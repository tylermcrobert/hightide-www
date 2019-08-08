import React, { useContext, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { AppCtx } from 'containers/App'
import Styled from './Styled'
import { Wrap, Section } from 'components/Styled'
import TextSwitcher from 'components/TextSwitcher'
import styled, { css } from 'styled-components/macro'

function Homepage() {
  const { homepage, capacity, brand, work } = useContext(AppCtx)
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
          <TextSwitcher
            data={capacity.results.map(item => ({
              heading: RichText.asText(item.data.title),
              body: RichText.asText(item.data.description)
            }))}
          />
        </Section>
        <Section>
          <Header>Clients</Header>
          <Styled.Grid cols={4}>
            {brands.map((item, i) => (
              <img src={item} key={i} alt="" />
            ))}
          </Styled.Grid>
        </Section>
        <Section>
          <FeaturedWork.Wrapper data={featuredProjects[1]} />
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

const line = css``

const ArrowSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 60 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M1.25 9H58.5M59 9l-9 9M59 9l-9-9" strokeWidth="1.4" />
    </g>
  </svg>
)

const Arrow = styled(ArrowSvg)`
  height: 0.8em;
  padding: 0 0.5em;
  transform: translateY(15%);
`
// Homepage.propTypes = {}

export default Homepage
