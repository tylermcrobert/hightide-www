import React from 'react'
import { RichText } from 'prismic-reactjs'
import TextSwitcher from '../TextSwitcher'

export default function Capabilities({ data }) {
  return (
    <TextSwitcher cols={2}>
      {data.results.map((item, i) => (
        <TextSwitcher.item i={i} key={RichText.asText(item.data.title)}>
          <TextSwitcher.Head>
            {RichText.asText(item.data.title)}
          </TextSwitcher.Head>
          <TextSwitcher.Body>
            {RichText.asText(item.data.description)}
          </TextSwitcher.Body>
        </TextSwitcher.item>
      ))}
    </TextSwitcher>
  )
}

export const getCapabilityData = async prismicApi =>
  prismicApi.getType('capacity')
