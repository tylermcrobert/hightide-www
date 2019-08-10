import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'

export default function Journal({ data }) {
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {data.results.map(item => {
            const publishDate = item.data.date
            const formattedDate = publishDate.replace(/-/g, '.')
            const title = RichText.asText(item.data.title)
            const mainImg = item.data.main_image.url
            const thumbnail = item.data.thumbnail_image.url

            return (
              <JournalCard
                key={item.uid}
                uid={item.uid}
                image={thumbnail || mainImg}
                date={formattedDate}
                title={title}
              />
            )
          })}
        </Styled.Wrapper>
      </Wrap>
    </Section>
  )
}

function JournalCard({ uid, image, date, title }) {
  return (
    <Link href="/journal/[uid]" as={`/journal/${uid}/`}>
      <a>
        <Styled.Img src={image} alt={`${title} - High Tide`} />
        <Styled.PostDesc>
          <Styled.PostTitle>{title}</Styled.PostTitle>
          <h5>{date}</h5>
        </Styled.PostDesc>
      </a>
    </Link>
  )
}
