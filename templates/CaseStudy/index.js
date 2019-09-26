import { createContext, memo } from 'react'
import { RichText } from 'prismic-reactjs'

import { Wrap } from 'style'
import PostIntro from 'components/PostIntro'
import { RelatedWrapper, RelatedItem } from 'components/Related'
import Section from 'components/Section'
import textExists from 'util/textExists'
import formatTitle from 'util/formatTitle'

import Gallery from './Gallery'
import Text from './Text'
import ImageBlock from './ImageBlock'

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
  if (items && items.length) {
    return (
      <RelatedWrapper>
        {items.map(({ item }) => {
          const name = RichText.asText(item.data.name)
          return (
            <RelatedItem
              key={item.id}
              title={name}
              src={item.data.image.small.url}
              link={`/work/${item.uid}`}
            />
          )
        })}
      </RelatedWrapper>
    )
  }
  return null
}

function Slices({ data }) {
  return data.body.map(slice => {
    switch (slice.slice_type) {
      case 'gallery':
        return <Gallery.Wrapper data={slice} />
      case 'image_block':
        return <ImageBlock data={slice} />
      case 'text_block':
        return <Text data={slice} />
      default:
        console.log(`nothing built for ${slice.slice_type}`)
        return null
    }
  })
}

export default CaseStudy
