import { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://hightidesite.prismic.io/api/v2'
const accessToken =
  'MC5XeEJWVXlBQUFHeWdXQWRo.77-977-977-977-9GO-_vRl077-977-9PR1C77-9WTfvv73vv71277-977-9Te-_ve-_vRFjB--_ve-_vWLvv73vv70'

export const client = Prismic.client(apiEndpoint, { accessToken })

export default function useApiData() {
  const [data, setData] = useState()
  async function getData() {
    // console.log(rawData.data.types)
    const homepage = await client.getSingle('page_home')
    const brand = await client.query(
      Prismic.Predicates.at('document.type', 'brand')
    )
    const capacity = await client.query(
      Prismic.Predicates.at('document.type', 'capacity')
    )
    const journal = await client.query(
      Prismic.Predicates.at('document.type', 'journal')
    )
    const work = await client.query(
      Prismic.Predicates.at('document.type', 'work')
    )

    setData({ homepage, brand, capacity, work, journal })
  }
  useEffect(() => {
    getData()
  }, [])

  return data
}
