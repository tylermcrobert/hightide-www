import React, { useContext, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { AppCtx } from 'containers/App'
import Styled from './Styled'
import { Wrap, Section } from 'components/Styled'
function Homepage() {
  const { homepage, capacity, brand, work } = useContext(AppCtx)
  const brands = brand.results.map(res => res.data.logo.url)
  const projects = work.results.map(item => item.data)
  const featuredProjects = projects.filter(item => item.featured === 'Featured')

  return (
    <>
      <Wrap>
        <Section.Large>
          {RichText.render(homepage.data.hero_text)}{' '}
        </Section.Large>
        <Section>
          <FeaturedWork.Wrapper data={featuredProjects[0]} />
        </Section>
        <Section>
          <TextSwitcher
            data={capacity.results.map(item => ({
              heading: RichText.asText(item.data.title),
              body: RichText.asText(item.data.description)
            }))}
          />
        </Section>
        <Section>
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
          {i === currentIndex && item.body}
        </div>
      ))}
    </div>
  )
}

function Header({ children, link }) {
  return (
    <Styled.Header>
      <h5>{children}</h5>
      <h5>{link}</h5>
    </Styled.Header>
  )
}
// Homepage.propTypes = {}

export default Homepage
