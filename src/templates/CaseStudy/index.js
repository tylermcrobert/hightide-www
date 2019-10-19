import React, { createContext, memo } from 'react'
import { RichText } from 'prismic-reactjs'

import { Wrap } from 'style'
import PostIntro from 'components/PostIntro'
import { RelatedWrapper, RelatedItem } from 'components/Related'
import Section from 'components/Section'
import textExists from 'util/textExists'
import formatTitle from 'util/formatTitle'

import TextBlock from 'components/slices/TextBlock'
import ImageBlock from 'components/slices/ImageBlock'
import Carousel from 'components/slices/Carousel'
import Video from 'components/slices/Video'
import Gallery from './Gallery'

export const CaseStudyCtx = createContext()

const CaseStudy = memo(({ data }) => {
  const title = RichText.asText(data.name)
  const alt = formatTitle(title)

  return (
    <CaseStudyCtx.Provider value={{ title, alt }}>
      <Wrap>
        <Section noTop>
          <img src={data.image.url} alt={alt} />
        </Section>
        <Section>
          <PostIntro>
            <PostIntro.Heading>{title}</PostIntro.Heading>
            {textExists(data.description) && (
              <PostIntro.Body>
                {RichText.render(data.description)}
              </PostIntro.Body>
            )}
          </PostIntro>
        </Section>
        <Slices data={data} />
      </Wrap>
      <Related items={data.related_work} />
    </CaseStudyCtx.Provider>
  )
})

function Related({ items }) {
  const validItems = items.filter(
    ({ item }) => item.uid && !item.isBroken && item
  )

  if (validItems && validItems.length) {
    return (
      <RelatedWrapper heading="Other Projects">
        {items.map(({ item }) => {
          const name = RichText.asText(item.data.name)
          return (
            <RelatedItem
              key={item.id}
              title={name}
              src={item.data.image.small.url}
              link="/work/[uid]"
              as={`/work/${item.uid}`}
            />
          )
        })}
      </RelatedWrapper>
    )
  }
  return null
}

function Slices({ data }) {
  return data.body
    .map(slice => {
      switch (slice.slice_type) {
        case 'gallery':
          return <Gallery.Wrapper data={slice} />
        case 'image_carousel':
          return <Carousel data={slice} />
        case 'image_block':
          return <ImageBlock data={slice} />
        case 'text_block':
          return <TextBlock data={slice} />
        case 'video_block':
          return <Video data={slice} />

        default:
          console.warn(`nothing built for ${slice.slice_type}`)
          return null
      }
    })
    .map((slice, i) => <React.Fragment key={i}>{slice}</React.Fragment>)
}

export default CaseStudy
