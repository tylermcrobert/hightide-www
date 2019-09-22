import React from 'react'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import TextWrap from 'components/TextWrap'
import Section from 'components/Section'
import SectionHead from 'components/SectionHead'
import TextSwitcher from 'components/TextSwitcher'

export default function Careers({ data }) {
  if (data && data.length) {
    return (
      <Section>
        <SectionHead>Careers</SectionHead>
        <CareerSwitcher data={data} />
      </Section>
    )
  }
  return null
}

Careers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any.isRequired,
      description: PropTypes.any.isRequired,
    })
  ).isRequired,
}

/* eslint-disable react/prop-types */

export function CareerSwitcher({ data }) {
  return (
    <TextSwitcher cols={1}>
      {data.map(({ title, description }, i) =>
        title.length ? (
          <TextSwitcher.item i={i} key={RichText.asText(title)}>
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
  )
}

export const getCapabilityData = async prismicApi =>
  prismicApi.getType('capacity')
