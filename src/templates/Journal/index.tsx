import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Section from 'components/Section'
import fmtDate from 'util/fmtDate'
import Heading from 'components/Heading'
import { ThemeProvider } from 'styled-components'
import { Opacity, Trigger } from 'components/LinkEffect'

import Styled from './Styled'
import getImage from './getImage'
import getLayout from './getLayout'
import useNextPage from './hooks/useNextPage'

interface JournalProps {
  totalPages: number
  results: any[]
}

const Journal: React.FC<JournalProps> = React.memo(
  ({ results: initialResults, totalPages }) => {
    const { getNextPage, isEnd, additionalPages, loading } = useNextPage(
      totalPages
    )
    const allResults = [...initialResults, ...additionalPages]

    return (
      <Section noTop>
        <Wrap>
          <Styled.Wrapper>
            {allResults.map(({ data, uid }, i) => {
              const [y, m, d] = data.date.split('-')
              const date = new Date(y, m - 1, d)
              const formattedDate = fmtDate(date)
              const title = RichText.asText(data.title)
              const mainImg = data.main_image.url
              const thumbnail = data.thumbnail_image
              const { isLarge, order } = getLayout(i)

              return (
                <JournalCard
                  key={uid}
                  uid={uid}
                  mainImg={mainImg}
                  thumbnail={thumbnail}
                  date={formattedDate}
                  title={title}
                  large={isLarge}
                  order={order}
                />
              )
            })}
          </Styled.Wrapper>
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
