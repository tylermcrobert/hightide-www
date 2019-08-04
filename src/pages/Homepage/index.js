import React, { useContext } from 'react'
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

      <hr />
      {capacity.results.map(({ data }, i) => (
        <div key={i}>
          {RichText.render(data.title)}
          {RichText.render(data.description)}
        </div>
      ))}

      <hr />

      <FeaturedWork.Wrapper data={featuredProjects[1]} />

      <hr />
      {brands.map((item, i) => (
        <img src={item} key={i} />
      ))}
    </div>
  )
}

function FeaturedWork({ name, img }) {
  return (
    <div>
      <h3>Featured Work: {name}</h3>
      <img src={img} style={{ width: '100%' }} />
    </div>
  )
}

FeaturedWork.Wrapper = ({ data }) => {
  return <FeaturedWork name={RichText.asText(data.name)} img={data.image.url} />
}
// Homepage.propTypes = {}

export default Homepage
