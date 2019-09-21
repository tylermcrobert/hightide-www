import React from 'react'

import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageHero from 'components/prismic/PageHero'
import Section from 'components/Section'

const About = React.memo(({ data }) => {
  const { about_hero: heroText } = data.site
  return (
    <>
      <Wrap>
        <PageHero text={heroText} />
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
              // console.log(`nothing built for ${item.slice_type}`)
              return null
          }
        })}
      </Wrap>
    </>
  )
})

export default About
// About.propTypes = {}
