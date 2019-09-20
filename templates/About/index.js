import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import Section from 'components/Section'
// import PropTypes from 'prop-types'

export default function About({ data }) {
  return (
    <>
      <Wrap>
        <Section>{RichText.render(data.hero_text)}</Section>
        <Capabilities data={data.site.capacities} />
        {data.body.map(item => {
          switch (item.slice_type) {
            case 'hero_video':
              return (
                <Section>
                  <video autoPlay muted css={{ width: '100%' }}>
                    <source src={item.items[0].hero_video.url} />
                  </video>
                </Section>
              )
            default:
              console.log(`nothing built for ${item.slice_type}`)
              return null
          }
        })}
      </Wrap>
    </>
  )
}

// About.propTypes = {}
