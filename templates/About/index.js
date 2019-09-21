import React from 'react'

import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageHero from 'components/prismic/PageHero'
import Careers from 'components/prismic/Careers'
import Difference from 'components/prismic/Difference'
import Diptych from 'components/prismic/Diptych'
import Section from 'components/Section'
import LazyImg from '@tylermcrobert/react-lazyimg'

/**
 * * * Hero
 * * * Image
 * * * Difference
 * Diptych
 * Brand Message
 * Logos
 * Image 3
 * * * What We do
 * video
 * Recognition
 * Image 4
 * * * Careers
 */

const About = React.memo(({ data }) => {
  const {
    about_hero: heroText,
    about_intro_image: heroImg,
    careers,
    our_difference: difference,
  } = data.site

  const diptychItems = [
    data.site.about_diptych_item_1,
    data.site.about_diptych_item_2,
  ]

  console.log(diptychItems)

  return (
    <>
      <Wrap>
        <PageHero text={heroText} />
        <LazyImg src={heroImg.url} />
        <Difference items={difference} />
        <Diptych items={diptychItems} />
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
        <Careers data={careers} />
      </Wrap>
    </>
  )
})

export default About
// About.propTypes = {}
