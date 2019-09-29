import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import TextSwitcher from 'components/TextSwitcher'
import TextWrap from 'components/TextWrap'
import { RichText } from 'prismic-reactjs'

function AboutSwitcher({ items }) {
  if (items && items) {
    return (
      <Section>
        <TextSwitcher cols={1}>
          {items.map(({ title, description }, i) =>
            title.length ? (
              <TextSwitcher.item
                i={`${i} ${title.text}`}
                key={RichText.asText(title)}
              >
                <TextSwitcher.Head>{RichText.asText(title)}</TextSwitcher.Head>
                <TextWrap>
                  <TextSwitcher.Body>
                    {RichText.asText(description)}
                  </TextSwitcher.Body>
                </TextWrap>
              </TextSwitcher.item>
            ) : null
          )}
        </TextSwitcher>
      </Section>
    )
  }

  return null
}

AboutSwitcher.propTypes = {
  items: PropTypes.array.isRequired,
}

export default AboutSwitcher
