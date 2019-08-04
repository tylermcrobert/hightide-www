import React, { useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { AppCtx } from 'containers/App'

function Homepage() {
  const { homepage, capacity, brand } = useContext(AppCtx)
  const brands = brand.results.map(res => res.data.logo.url)

  return (
    <div>
      {RichText.render(homepage.data.hero_text)}

      {capacity.results.map(({ data }, i) => (
        <div key={i}>
          {RichText.render(data.title)}
          {RichText.render(data.description)}
        </div>
      ))}

      {brands.map(item => (
        <img src={item} />
      ))}
    </div>
  )
}

// Homepage.propTypes = {}

export default Homepage
