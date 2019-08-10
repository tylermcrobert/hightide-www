import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'

/* eslint no-console: 0 */

function JournalPage({ data: apiData }) {
  const { data } = apiData

  return (
    <Wrap>
      <img src={data.main_image.url} alt="" />
      <Section>
        <h1>{RichText.asText(data.title)}</h1>
        <Styled.TextWrap>{RichText.render(data.abstract)}</Styled.TextWrap>
      </Section>
      <SliceSwitch data={data} />
    </Wrap>
  )
}

function SliceSwitch({ data }) {
  return data.body
    .map(sliceItem => {
      switch (sliceItem.slice_type) {
        case 'post_gallery':
          return (
            <Section>
              <PostGallery data={sliceItem} />
            </Section>
          )
        case 'hero_image':
          return <HeroImage data={sliceItem} />
        default:
          console.log('nothing built for ', sliceItem.slice_type)
          return null
      }
    })
    .map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)
}

function PostGallery({ data }) {
  return (
    <Styled.Gallery>
      {data.items.map(galleryItem => (
        <img
          key={galleryItem.gallery_image.url}
          src={galleryItem.gallery_image.url}
          alt=""
        />
      ))}
    </Styled.Gallery>
  )
}

function HeroImage({ data }) {
  return data.items.map(item => (
    <React.Fragment key={item.hero_image.url}>
      <Section>
        {item.hero_image.url && <img src={item.hero_image.url} alt="" />}
      </Section>
      <Section>
        <Styled.TextWrap center>
          {RichText.render(item.hero_note)}
        </Styled.TextWrap>
      </Section>
    </React.Fragment>
  ))
}

// JournalPage.propTypes = {}

export default JournalPage
