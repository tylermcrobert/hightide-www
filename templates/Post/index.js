import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { Wrap } from 'style'
import TextWrap from 'components/TextWrap'
import Section from 'components/Section'
import PostIntro from 'components/PostIntro'

import TextBlock from 'components/slices/TextBlock'
import ImageBlock from 'components/slices/ImageBlock'

import Styled from './Styled'
/* eslint no-console: 0 */

function Post({ data: apiData }) {
  const { data } = apiData

  return (
    <Wrap>
      <LazyImg src={data.main_image.url} alt="" />
      <Section>
        <PostIntro>
          <PostIntro.Heading>{RichText.asText(data.title)}</PostIntro.Heading>
          <PostIntro.Body>{RichText.render(data.abstract)}</PostIntro.Body>
        </PostIntro>
      </Section>
      <SliceSwitch data={data} />
    </Wrap>
  )
}

function SliceSwitch({ data }) {
  return data.body
    .map(sliceItem => {
      switch (sliceItem.slice_type) {
        /**
         * HalfHelix shitshow
         */
        case 'post_gallery':
          return (
            <Section>
              <PostGallery data={sliceItem} />
            </Section>
          )
        case 'hero_image':
          return <HeroImage data={sliceItem} />
        /**
         * Tyler McRobert shitshow
         */
        case 'image_block':
          return <ImageBlock data={sliceItem} />
        case 'text_block':
          return <TextBlock data={sliceItem} />
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
        <LazyImg
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
        {item.hero_image.url && <LazyImg src={item.hero_image.url} alt="" />}
      </Section>
      <Section>
        <TextWrap center>{RichText.render(item.hero_note)}</TextWrap>
      </Section>
    </React.Fragment>
  ))
}

// JournalPage.propTypes = {}

export default Post
