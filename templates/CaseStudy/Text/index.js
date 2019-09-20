import React from 'react'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import Section from 'components/Section'
import textExists from 'util/textExists'

// import PropTypes from 'prop-types'

function Text({ data }) {
  const { text } = data.primary

  if (textExists(text)) {
    return (
      <Section>
        <TextWrap center>{RichText.render(text)}</TextWrap>
      </Section>
    )
  }
  return null
}

// Text.propTypes = {}

export default Text
