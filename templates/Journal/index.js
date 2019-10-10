import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Section from 'components/Section'
import fmtDate from 'util/fmtDate'
import Heading from 'components/Heading'
import { ThemeProvider } from 'styled-components'
import {
  Underline,
  Trigger,
  ZoomWrapper,
  ZoomNode,
} from 'components/LinkEffect'
import Styled from './Styled'
import getImage from './getImage'

export default function Journal({ results }) {
  return (
    <Section noTop>
      <Wrap>
        <Styled.Wrapper>
          {results.map(({ data, uid }, i) => {
            const date = new Date(data.date)
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
      </Wrap>
    </Section>
  )
}

function JournalCard({ uid, mainImg, date, title, large, thumbnail }) {
  const image = getImage({ mainImg, thumbnail, large })

  return (
    <ThemeProvider theme={{ large }}>
      <Styled.JournalCard as={Trigger}>
        <Link href="/journal/[uid]" as={`/journal/${uid}/`}>
          <a>
            <Styled.CardLayout>
              <ZoomWrapper>
                <Styled.PostImage src={image} as={ZoomNode} />
              </ZoomWrapper>
              <Styled.DescWrapper>
                <Heading as="h2" headingStyle={2} noMargin>
                  <Underline>{title}</Underline>
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
