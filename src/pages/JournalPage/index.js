import React from 'react'
import { Wrap, Section } from 'components/Styled'
import { RichText } from 'prismic-reactjs'
import Styled from './Styled'

function JournalPage({ data: apiData }) {
  const { data } = apiData
  console.log()
  return (
    <Wrap>
      <Section>
        <h2>{RichText.asText(data.title)}</h2>
        <img src={data.main_image.url} />
        {RichText.render(data.abstract)}
        <SliceSwitch data={data} />
      </Section>
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
          return (
            <Section>
              <HeroImage data={sliceItem} />
            </Section>
          )
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
    <div key={item.hero_image.url}>
      <img src={item.hero_image.url} alt="" />
      <Section>
        <Styled.TextWrap>{RichText.render(item.hero_note)}</Styled.TextWrap>
      </Section>
    </div>
  ))
}

// JournalPage.propTypes = {}

export default JournalPage
