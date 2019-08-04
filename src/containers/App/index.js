import React from 'react'
import { RichText } from 'prismic-reactjs'
import Layout from '../Layout/index'
import useApiData from './hooks/useApiData'

function App() {
  const data = useApiData()

  if (data) {
    const { homepage, brand, capacity } = data

    const brands = brand.results.map(res => res.data.logo.url)

    return (
      <Layout>
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
      </Layout>
    )
  }
  return <div>loading...</div>
}

// App.propTypes = {}

export default App
