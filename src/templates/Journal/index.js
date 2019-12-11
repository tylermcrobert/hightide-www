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
import useNextPage from './hooks/useNextPage'

const Journal = React.memo(({ results: initialResults, totalPages }) => {
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
            // every 6th image OR every 6th image starting at 3rd item
            const large = i % 6 === 0 || (i + 2) % 6 === 0

            return (
              <JournalCard
                key={uid}
                uid={uid}
                mainImg={mainImg}
                thumbnail={thumbnail}
                date={formattedDate}
                title={title}
                large={large}
              />
            )
          })}
        </Styled.Wrapper>
        {(!isEnd || loading) && (
          <Section>
            <Styled.LoadMore onClick={getNextPage}>Load More</Styled.LoadMore>
          </Section>
        )}
      </Wrap>
    </Section>
  )
})

function JournalCard({ uid, mainImg, date, title, large, thumbnail }) {
  const image = getImage({ mainImg, thumbnail, large })

  return (
    <ThemeProvider theme={{ large }}>
      <Styled.JournalCard as={Trigger}>
        <Link href="/journal/[uid]" as={`/journal/${uid}/`}>
          <a>
            <Styled.CardLayout>
              <Styled.PostImage src={image} />
              <Styled.DescWrapper>
                <Heading as="h2" headingStyle={2} noMargin>
                  <Opacity>{title}</Opacity>
                </Heading>
                <Heading as="h3" headingStyle={2} noMargin>
                  {date}
                </Heading>
              </Styled.DescWrapper>
            </Styled.CardLayout>
          </a>
        </Link>
      </Styled.JournalCard>
    </ThemeProvider>
  )
}

export default Journal
