/* eslint-disable camelcase */
import React, { useState } from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Section from 'components/Section'
import Heading from 'components/Heading'
import { Opacity, Trigger } from 'components/LinkEffect'
import subArr from 'util/subarr'
import { PrismicImage } from 'types'
import getImage from './getImage'
import Styled from './Styled'
import useNextPage from './hooks/useNextPage'

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
        <Styled.JournalSection key={section[0].uid}>
          {section.map((item, itemIndex) => {
            const isSectionEven = sectionIndex % 2 === 0
            const isLarge = isSectionEven ? itemIndex === 0 : itemIndex === 2

            return (
              <Item
                key={item.uid}
                uid={item.uid}
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
  uid: string
  data: JournalLink['data']
  itemIndex: number
  isLarge: boolean
  isSectionEven: boolean
}

const Item: React.FC<ItemProps> = ({
  uid,
  data,
  itemIndex,
  isLarge,
  isSectionEven,
}) => {
  const [isHovered, setHovered] = useState<boolean>(false)
  const image = getImage({
    isLarge: isSectionEven ? itemIndex === 0 : itemIndex === 2,
    mainImg: data.main_image,
    portrait: data.thumbnail_image.portrait,
    thumbnail: data.thumbnail_image,
  })

  const [y, m, d] = data.date.split('-')
  const date = `${m}.${d}.${y}`

  const title = RichText.asText(data.title)

  const linkProps = {
    href: '/journal/[uid]',
    as: `/journal/${uid}/`,
  }

  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  return (
    <>
      <Link {...linkProps}>
        <Styled.ImageWrap isLarge={isLarge} {...hoverProps}>
          <img src={image} alt={title} />
        </Styled.ImageWrap>
      </Link>
      <Link {...linkProps}>
        <a {...hoverProps}>
          <Text date={date} title={title} hovered={isHovered} />
        </a>
      </Link>
    </>
  )
}

/**
 * Text Wrapper
 */

interface TextProps {
  date: string
  title: string
  hovered: boolean
}

const Text: React.FC<TextProps> = ({ title, date, hovered }) => (
  <Styled.DescWrapper hovered={hovered}>
    <Heading as="h2" headingStyle={2} noMargin>
      {title}
    </Heading>
    <Heading as="h3" headingStyle={2} noMargin>
      {date}
    </Heading>
  </Styled.DescWrapper>
)

export default Journal

/**
 * Types
 */

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
