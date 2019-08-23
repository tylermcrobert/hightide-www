import React from 'react'
import Prismic from 'prismic-javascript'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Meta from '../components/Meta'

function Work({ data }) {
  console.log(data)
  return (
    <>
      <Meta title="data" url="data/" />
      <h1>Work</h1>
      <Grid>
        {data.work.results.map(item => (
          <Section key={item.uid}>
            {RichText.render(item.data.name)}
            <h5>{item.uid}</h5>
            Image:
            <img src={item.data.image.url} />
            hover Image:
            <img src={item.data.hover_image.url} />
            lazy image:
            <img src={item.data.lazy_image.url} />
            <p>link: {item.data.link.url}</p>
            <p>featured: {item.data.featured.toString()}</p>
            <p>
              desc:{' '}
              {item.data.description && RichText.render(item.data.description)}
            </p>
          </Section>
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Section = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  box-sizing: border-box;
`

Work.getInitialProps = async ({ prismicApi }) => {
  const types = Object.values(prismicApi.types)
  const req = types.map(async type =>
    prismicApi.query(Prismic.Predicates.at('document.type', type))
  )
  const dataItems = await Promise.all(req)
  const data = dataItems.reduce((acc, item, c) => {
    acc[types[c]] = item
    return acc
  }, {})

  return { data }
}

/*

  page home: all home shit
  our_difference: empty
  journal: journal shit
  error_messages: 404s and stuff
  basic_link: recognition(site inspire, dirt, the dieline, etc.)
  brand: featured brands
 */

export default Work
