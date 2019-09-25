import React from 'react'
import Section from 'components/Section'
import { RichText } from 'prismic-reactjs'
import TextWrap from 'components/TextWrap'
import PropTypes from 'prop-types'
import Styled from './Styled'

function Difference({ items }) {
  if (items && items.length) {
    return (
      <Section>
        <h5>Our Difference</h5>
        <Styled.ItemWrapper>
          {items.map(({ title, description }, i) => (
            <Styled.Item key={`${RichText.asText(title)}${i}`}>
              {RichText.render(title)}
              <TextWrap>{RichText.render(description)}</TextWrap>
            </Styled.Item>
          ))}
        </Styled.ItemWrapper>
      </Section>
    )
  }
  return null
}

Difference.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Difference
