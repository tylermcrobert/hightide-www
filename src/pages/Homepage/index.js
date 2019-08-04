import React, { useContext, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { AppCtx } from 'containers/App'
import Styled from './Styled'
import { Wrap, Section } from 'components/Styled'
import styled, { css } from 'styled-components'

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
      <Header link={<a href="">{name}</a>}>Featured Work</Header>
      <img src={img} style={{ width: '100%' }} alt="" />
    </div>
  )
}

FeaturedWork.Wrapper = ({ data }) => {
  return <FeaturedWork name={RichText.asText(data.name)} img={data.image.url} />
}

function TextSwitcher({ data }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  function handleTitle(i) {
    setCurrentIndex(currentIndex !== i ? i : null)
  }

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h2 onClick={() => handleTitle(i)}>{item.heading}</h2>
          <p>{i === currentIndex && item.body}</p>
        </div>
      ))}
    </div>
  )
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
    <g stroke="#000" fill="none" fill-rule="evenodd" stroke-linecap="square">
      <path d="M1.25 9H58.5M59 9l-9 9M59 9l-9-9" stroke-width="1.8" />
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
