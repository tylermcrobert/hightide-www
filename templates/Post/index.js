import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { Wrap, Section } from '../../style'
import TextWrap from '../../components/TextWrap'
import PageIntro from '../../components/PageIntro'
import Styled from './Styled'
/* eslint no-console: 0 */

function Post({ data: apiData }) {
  const { data } = apiData

  return (
    <Wrap>
      <LazyImg src={data.main_image.url} alt="" />
      <Section>
        <PageIntro>
          <PageIntro.Heading>{RichText.asText(data.title)}</PageIntro.Heading>
          <PageIntro.Body>{RichText.render(data.abstract)}</PageIntro.Body>
        </PageIntro>
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
