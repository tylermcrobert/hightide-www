import React, { useContext, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { AppCtx } from 'containers/App'

function Homepage() {
  const { homepage, capacity, brand, work } = useContext(AppCtx)
  const brands = brand.results.map(res => res.data.logo.url)
  const projects = work.results.map(item => item.data)
  const featuredProjects = projects.filter(item => item.featured === 'Featured')

  console.log()
  return (
    <div>
      {RichText.render(homepage.data.hero_text)}
      <hr />
      <FeaturedWork.Wrapper data={featuredProjects[0]} />

      <TextSwitcher
        data={capacity.results.map(item => ({
          heading: RichText.asText(item.data.title),
          body: RichText.asText(item.data.description)
        }))}
      />
      <hr />
      {brands.map((item, i) => (
        <img src={item} key={i} alt="" />
      ))}
      <hr />
      <FeaturedWork.Wrapper data={featuredProjects[1]} />
      <hr />
    </div>
  )
}

function FeaturedWork({ name, img }) {
  return (
    <div>
      <h3>Featured Work: {name}</h3>
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

  console.log(data)
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
// Homepage.propTypes = {}

export default Homepage
