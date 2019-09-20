import React from 'react'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import TextSwitcher from '../TextSwitcher'

export default function Capabilities({ data }) {
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
  data: PropTypes.arrayOf({
    capacity: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
  }).isRequired,
}

export const getCapabilityData = async prismicApi =>
  prismicApi.getType('capacity')
