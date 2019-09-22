import React from 'react'

import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageHero from 'components/prismic/PageHero'
import Careers from 'components/prismic/Careers'
import Difference from 'components/prismic/Difference'
import Clients from 'components/prismic/Clients'
import Diptych from 'components/prismic/Diptych'
import Section from 'components/Section'
import LazyImg from '@tylermcrobert/react-lazyimg'

/**
 * * * Hero
 * * * Image
 * * * Difference
 * * * Diptych
 * Brand Message
 * * * Logos
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
    clients,
  } = data.site

  const diptychItems = [
    data.site.about_diptych_item_1,
    data.site.about_diptych_item_2,
  ]

  return (
    <>
      <Wrap>
        <PageHero text={heroText} />
        <LazyImg src={heroImg.url} />
        <Difference items={difference} />
        <Diptych items={diptychItems} />
        <Clients items={clients} />
        <Capabilities data={data.site.capacities} />
        <Careers data={careers} />
      </Wrap>
    </>
  )
})

export default About
// About.propTypes = {}
