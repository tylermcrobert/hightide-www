/* eslint-disable camelcase */
import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Section from 'components/Section'
import Heading from 'components/Heading'
import { Opacity, Trigger } from 'components/LinkEffect'

import { PrismicImage } from 'types'
import getImage from './getImage'
import Styled from './Styled'

import useNextPage from './hooks/useNextPage'

const subArr = (array: any[], n: number): any[] => {
  const subArrCount = array.length / n

  const emptySubArrs = Array.from({ length: subArrCount })
  const fullSubArrs = emptySubArrs.map((_, i) => {
    const ArrStart = i * n
    return [...array].slice(ArrStart, ArrStart + n)
  })

  return fullSubArrs
}

/**
 * Main Component
 */

const Journal: React.FC<JournalProps> = ({
  results: initialResults,
  totalPages,
}) => {
  const { getNextPage, isEnd, additionalPages, loading } = useNextPage(
    totalPages
  )
  const allResults: JournalLink[] = [...initialResults, ...additionalPages]

  return (
    <Section noTop>
      <JournalSections allResults={allResults} />
      <Wrap>
        {(!isEnd || loading) && (
          <Section>
            <Trigger>
              <Styled.LoadMore onClick={getNextPage}>
                <Opacity>Load More</Opacity>
              </Styled.LoadMore>
            </Trigger>
          </Section>
        )}
      </Wrap>
    </Section>
  )
}

/**
 * Section Wrapper
 */

interface SectionsProps {
  allResults: JournalLink[]
}

const JournalSections: React.FC<SectionsProps> = ({ allResults }) => {
  type JournalLinks = JournalLink[]
  const sections: JournalLinks[] = subArr(allResults, 3)

  return (
    <Wrap>
      {sections.map((section, sectionIndex) => (
        <Styled.JournalSection>
          {section.map((item, itemIndex) => {
            const isSectionEven = sectionIndex % 2 === 0
            const isLarge = isSectionEven ? itemIndex === 0 : itemIndex === 2

            return (
              <Item
                isLarge={isLarge}
                itemIndex={itemIndex}
                isSectionEven={isSectionEven}
                data={item.data}
              />
            )
          })}
        </Styled.JournalSection>
      ))}
    </Wrap>
  )
}

/**
 * Item Wrapper
 */

interface ItemProps {
  data: JournalLink['data']
  itemIndex: number
  isLarge: boolean
  isSectionEven: boolean
}

const Item: React.FC<ItemProps> = ({
  data,
  itemIndex,
  isLarge,
  isSectionEven,
}) => {
  const image = getImage({
    isLarge: isSectionEven ? itemIndex === 0 : itemIndex === 2,
    mainImg: data.main_image,
    portrait: data.thumbnail_image.portrait,
    thumbnail: data.thumbnail_image,
  })

  const [y, m, d] = data.date.split('-')
  const date = `${d}.${m}.${y}`

  const title = RichText.asText(data.title)

  return (
    <>
      <Styled.ImageWrap isLarge={isLarge}>
        <img src={image} alt={title} />
      </Styled.ImageWrap>
      <Text date={date} title={title} />
    </>
  )
}

/**
 * Text Wrapper
 */

interface TextProps {
  date: string
  title: string
}

const Text: React.FC<TextProps> = ({ title, date }) => (
  <Opacity>
    <Styled.DescWrapper>
      <Heading as="h2" headingStyle={2} noMargin>
        {title}
      </Heading>
      <Heading as="h3" headingStyle={2} noMargin>
        {date}
      </Heading>
    </Styled.DescWrapper>
  </Opacity>
)

export default Journal

type RichText = { type: string }[]

interface ThumbnailImg extends PrismicImage {
  portrait: PrismicImage
  landscape: PrismicImage
}

type JournalLink = {
  id: string
  uid: string
  type: string
  href: string
  tags: string[]
  first_publication_date: string
  last_publication_date: string
  slugs: string[]
  linked_documents: any[]
  lang: string
  alternate_languages: any[]
  data: {
    title: RichText
    date: string
    abstract: RichText
    thumbnail_image: ThumbnailImg
    main_image: PrismicImage
  }
}

interface JournalProps {
  totalPages: number
  results: any[]
}
