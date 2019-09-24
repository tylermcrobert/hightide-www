import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageIntro from 'components/PageIntro'
import Careers from 'components/prismic/Careers'
import Difference from 'components/prismic/Difference'
import Clients from 'components/prismic/Clients'
import Diptych from 'components/prismic/Diptych'
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
        <PageIntro>{RichText.render(heroText)}</PageIntro>
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
