import React, { createContext, memo } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import PostIntro from 'components/PostIntro'
import { RelatedWrapper, RelatedItem } from 'components/Related'
import Section from 'components/Section'
import textExists from 'util/textExists'
import formatTitle from 'util/formatTitle'
import TextBlock from 'components/slices/TextBlock'
import MediaBlock from 'components/slices/MediaBlock'
import Carousel from 'components/slices/Carousel'
import Video from 'components/slices/Video'
import getResponsiveImage from 'util/getResponsiveImage'
import getImageSize from 'util/getImageSize'
import renderText, { PrismicRichText } from 'util/renderText'
import Gallery from './Gallery'
import Styled from './Styled'

interface CaseStudyCtxProps {
  title: string
  alt: string
}
export const CaseStudyCtx = createContext({
  title: '',
  alt: '',
})

interface CsProps {
  data: any
}

const CaseStudy: React.FC<CsProps> = memo(({ data }) => {
  const title = RichText.asText(data.name)
  const alt = formatTitle(title)
  const heroAtts = getResponsiveImage(data.image.url)

  return (
    <CaseStudyCtx.Provider value={{ title, alt }}>
      <Wrap>
        <Section noTop>
          <img {...heroAtts} alt={alt} />
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
        <Section>
          <Credits data={data.credits} />
        </Section>
      </Wrap>
      <Related items={data.related_work} />
    </CaseStudyCtx.Provider>
  )
})

interface CreditsProps {
  data: PrismicRichText
}

const Credits: React.FC<CreditsProps> = ({ data }) => {
  const credits = renderText(data)

  return <>{credits ? <Styled.Credits>{credits}</Styled.Credits> : null}</>
}

function Related({ items }) {
  const validItems = items.filter(
    ({ item }) => item.uid && !item.isBroken && item
  )

  if (validItems && validItems.length) {
    return (
      <RelatedWrapper heading="Other Projects">
        {items.map(({ item }) => {
          if (!item.data) return null

          const name = RichText.asText(item.data.name)

          const image = item.data.thumbnail
            ? item.data.thumbnail.url
            : item.data.image.url

          const resizedImage = getImageSize(image, { w: 800 })

          return (
            <RelatedItem
              key={item.id}
              title={name}
              src={resizedImage}
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
          return <MediaBlock data={slice} />
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
