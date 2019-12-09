import React from 'react'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import * as List from 'components/List'

export default function Capabilities({ data }) {
  return (
    <Section>
      <List.Wrapper title="What We Do">
        {data.map(({ capacity }) =>
          capacity.length ? (
            <List.Item>
              <List.Title noMargin>{RichText.asText(capacity)}</List.Title>
            </List.Item>
          ) : null
        )}
      </List.Wrapper>
    </Section>
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
