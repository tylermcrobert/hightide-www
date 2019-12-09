import React from 'react'
import Section from 'components/Section'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import PropTypes from 'prop-types'
import * as List from 'components/List'

function Difference({ items }) {
  if (items && items.length) {
    return (
      <Section>
        <List.Wrapper title="Our Difference">
          {items.map(({ title, description }, i) => (
            <List.Item key={RichText.asText(title)}>
              <List.Title>{RichText.asText(title)}</List.Title>
              <TextWrap>{RichText.render(description)}</TextWrap>
            </List.Item>
          ))}
        </List.Wrapper>
      </Section>
    )
  }
  return null
}

Difference.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Difference
