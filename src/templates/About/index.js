import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Capabilities from 'components/prismic/Capabilities'
import PageIntro from 'components/PageIntro'
import Careers from 'components/prismic/Careers'
import Difference from 'components/prismic/Difference'
import Clients from 'components/prismic/Clients'
import Diptych from 'components/prismic/Diptych'
import Recognition from 'components/prismic/Recognition'
import AboutSwitcher from 'components/prismic/AboutSwitcher'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Section from 'components/Section'

const About = React.memo(({ site }) => {
  const {
    about_hero: heroText,
    about_intro_image: heroImg,
    careers,
    our_difference: difference,
    clients,
    client_message: clientMessage,
    about_image_2: image2,
    about_image_3: image3,
    about_image_4: image4,
    impact_message: impactMessage,
    recognition,
    about_switcher: aboutSwitcher,
    about_video_1: aboutVideo1,
  } = site

  const diptychItems = [site.about_diptych_item_1, site.about_diptych_item_2]

  return (
    <>
      <Wrap>
        {/*  */}
        <PageIntro>{RichText.render(heroText)}</PageIntro>
        <Section>
          <LazyImg src={heroImg.url} />
        </Section>
        <Difference items={difference} />
        <Diptych items={diptychItems} />
        <Section>{RichText.render(clientMessage)}</Section>
        <Clients items={clients} speed={site.clients_speed} />
        <Image src={image2 && image2.url} />
        <Capabilities data={site.capacities} />
        <Image src={image3 && image3.url} />
        <Section>{RichText.render(impactMessage)}</Section>
        <AboutSwitcher items={aboutSwitcher} />
        <Image src={image4 && image4.url} />
        <Careers data={careers} />
        <Video url={aboutVideo1 && aboutVideo1.url} />
        <Recognition items={recognition} />
      </Wrap>
    </>
  )
})

const Video = ({ url }) =>
  url && (
    <video autoPlay muted loop>
      <source src={url} />
    </video>
  )

const Image = ({ src }) =>
  src && (
    <Section>
      <LazyImg src={src} />
    </Section>
  )

export default About
// About.propTypes = {}
