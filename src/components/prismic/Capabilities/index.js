import React from 'react'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import TextSwitcher from 'components/TextSwitcher'
import Section from 'components/Section'
import SectionHead from 'components/SectionHead'

export default function Capabilities({ data }) {
  return (
    <Section>
      <SectionHead>What We Do</SectionHead>
      <CapabilitiesNode data={data} />
    </Section>
  )
}

/* eslint-disable react/prop-types */
export function CapabilitiesNode({ data }) {
  return (
    <TextSwitcher cols={2}>
      {data.map(({ capacity, description }, i) =>
        capacity.length ? (
          <TextSwitcher.item i={i} key={RichText.asText(capacity)}>
            <TextSwitcher.Head>{RichText.asText(capacity)}</TextSwitcher.Head>
            <TextSwitcher.Body>
              {RichText.asText(description)}
            </TextSwitcher.Body>
          </TextSwitcher.item>
        ) : null
      )}
    </TextSwitcher>
  )
}

Capabilities.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      capacity: PropTypes.any,
      description: PropTypes.any,
    })
  ).isRequired,
}
