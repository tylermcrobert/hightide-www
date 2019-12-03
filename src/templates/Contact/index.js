import React, { createContext } from 'react'
import { RichText } from 'prismic-reactjs'
import PageIntro from 'components/PageIntro'
import { Wrap } from 'style'

export default function Contact({ hero }) {
  return (
    <Wrap>
      <PageIntro>{RichText.render(hero)}</PageIntro>
    </Wrap>
  )
}

// About.propTypes = {}

export const ContactCtx = createContext()
