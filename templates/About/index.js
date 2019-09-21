import React from 'react'

import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageHero from 'components/prismic/PageHero'
import Careers from 'components/prismic/Careers'
import Difference from 'components/prismic/Difference'
import Section from 'components/Section'
import LazyImg from '@tylermcrobert/react-lazyimg'

const About = React.memo(({ data }) => {
  const {
    about_hero: heroText,
    about_intro_image: heroImg,
    careers,
    our_difference: difference,
  } = data.site

  return (
    <>
      <Wrap>
        <PageHero text={heroText} />
        <LazyImg src={heroImg.url} />
        <Difference items={difference} />
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
