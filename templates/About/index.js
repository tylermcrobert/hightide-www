import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from '../../style'
import Capabilities from '../../components/Capabilities'
import Section from '../../components/Section'
// import PropTypes from 'prop-types'

export default function About({ data }) {
  return (
    <>
      <Wrap>
        <Section>{RichText.render(data.hero_text)}</Section>
        <Capabilities data={data.capabilites} />
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
            // case 'heroes_texts':
            //   return <Section>heroes_texts</Section>
            // case 'gif_hero':
            //   return (
            //     <Section>
            //       <img src={item.items[0].gif_hero_image.url} />
            //     </Section>
            //   )
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
