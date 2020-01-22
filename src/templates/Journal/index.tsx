/* eslint-disable camelcase */
import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Section from 'components/Section'
import fmtDate from 'util/fmtDate'
import Heading from 'components/Heading'
import styled, { ThemeProvider } from 'styled-components'
import { Opacity, Trigger } from 'components/LinkEffect'

import { PrismicImage } from 'types'
import Styled from './Styled'
import getImage from './getImage'
import useNextPage from './hooks/useNextPage'

type RichText = { type: string }[]

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
    thumbnail_image: PrismicImage | null
    // main_image: {400: {…}, 900: {…}, 2400: {…}, dimensions: {…}, alt: null, copyright: null, url: "https://images.prismic.io/hightidesite/b39c28d4-60…to=compress,format&rect=0,0,1200,800&w=1400&h=933"}
    // thumbnail_image: {dimensions: {…}, alt: null, copyright: null, url: "https://images.prismic.io/hightidesite/b39c28d4-60…to=compress,format&rect=0,0,1200,800&w=1200&h=800", portrait: {…}, …}
    // related_journals: (3) [{…}, {…}, {…}]
    // body: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // version: null
    // spotify_link: {}
  }
}
interface JournalProps {
  totalPages: number
  results: any[]
}

const subArr = (array: any[], n: number): any[] => {
  const subArrCount = array.length / n

  const emptySubArrs = Array.from({ length: subArrCount })
  const fullSubArrs = emptySubArrs.map((_, i) => {
    const ArrStart = i * n
    return [...array].slice(ArrStart, ArrStart + n)
  })

  return fullSubArrs
}

const Journal: React.FC<JournalProps> = React.memo(
  ({ results: initialResults, totalPages }) => {
    const { getNextPage, isEnd, additionalPages, loading } = useNextPage(
      totalPages
    )
    const allResults: JournalLink[] = [...initialResults, ...additionalPages]

    type JournalLinks = JournalLink[]
    const sections: JournalLinks[] = subArr(allResults, 3)

    return (
      <Section noTop>
        <Wrap>
          {/* <Styled.Wrapper> */}

          {sections.map((section, sectionIndex) => (
            <JSection>
              {section.map((item, itemIndex) => {
                const isSectionEven = sectionIndex % 2 === 0
                const isLarge = isSectionEven
                  ? itemIndex === 0
                  : itemIndex === 2

                const image =
                  (item.data.thumbnail_image &&
                    item.data.thumbnail_image.url) ||
                  ''

                return (
                  <>
                    <ImageWrap isLarge={isLarge}>
                      <img src={image} alt="asdf" />
                    </ImageWrap>
                    <Text
                      date="data"
                      title={RichText.asText(item.data.title)}
                    />
                  </>
                )
              })}
            </JSection>
          ))}
          {/* </Styled.Wrapper> */}
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
)

const JSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-auto-flow: column;
`

const ImageWrap = styled.div<{ isLarge: boolean }>`
  grid-row: ${props => (props.isLarge ? 'auto / span 3' : 'auto')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

interface TextProps {
  date: string
  title: string
}

interface CardProps extends TextProps {
  uid: string
  mainImg: string
  large: boolean
  thumbnail: object
  order: number
}

const JournalCard: React.FC<CardProps> = ({
  uid,
  mainImg,
  date,
  title,
  large,
  thumbnail,
  order,
}) => {
  const image = getImage({ mainImg, thumbnail, large })

  return (
    <ThemeProvider theme={{ large }}>
      <Styled.JournalCard as={Trigger} order={order}>
        <Link href="/journal/[uid]" as={`/journal/${uid}/`}>
          <a>
            <Styled.CardLayout>
              <Styled.PostImage src={image} />
              <Text title={title} date={date} />
            </Styled.CardLayout>
          </a>
        </Link>
      </Styled.JournalCard>
    </ThemeProvider>
  )
}

const Text: React.FC<TextProps> = ({ title, date }) => {
  return (
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
}

export default Journal
