import React, { useState, useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://hightidesite.prismic.io/api/v2'
const accessToken =
  'MC5XeEJWVXlBQUFHeWdXQWRo.77-977-977-977-9GO-_vRl077-977-9PR1C77-9WTfvv73vv71277-977-9Te-_ve-_vRFjB--_ve-_vWLvv73vv70'

export const client = Prismic.client(apiEndpoint, { accessToken })

function useApiData() {
  const [data, setData] = useState()
  async function getData() {
    const homepage = await client.getSingle('page_home')
    const brand = await client.query(
      Prismic.Predicates.at('document.type', 'brand')
    )
    const capacity = await client.query(
      Prismic.Predicates.at('document.type', 'capacity')
    )

    setData({ homepage, brand, capacity })
  }
  useEffect(() => {
    getData()
  }, [])

  return data
}
function App() {
  const data = useApiData()

  if (data) {
    const { homepage, brand, capacity } = data

    const brands = brand.results.map(res => res.data.logo.url)

    return (
      <>
        <Nav />
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
      </>
    )
  }
  return <div>loading...</div>
}

function Nav() {
  return <nav>high tide</nav>
}
// App.propTypes = {}

export default App
