import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import fmtDate from 'util/fmtDate'
import Styled from './Styled'

export default function Journal({ results }) {
  return (
    <Wrap>
      <Styled.Wrapper>
        {results.map(({ data, uid }) => {
          const date = new Date(data.date)
          const formattedDate = fmtDate(date)
          const title = RichText.asText(data.title)
          const mainImg = data.main_image.url
          const thumbnail = data.thumbnail_image && data.thumbnail_image.url

          return (
            <JournalCard
              key={uid}
              uid={uid}
              image={thumbnail || mainImg}
              date={formattedDate}
              title={title}
            />
          )
        })}
      </Styled.Wrapper>
    </Wrap>
  )
}

function JournalCard({ uid, image, date, title, large }) {
  return (
    <Link href="/journal/[uid]" as={`/journal/${uid}/`}>
      <Styled.CardWrapper large={large}>
        <Styled.ImgContainer large={large}>
          <Styled.Img src={image} alt={`${title} - High Tide`} />
        </Styled.ImgContainer>
        <Styled.PostDesc>
          <Styled.PostTitle>{title}</Styled.PostTitle>
          <h5>{date}</h5>
        </Styled.PostDesc>
      </Styled.CardWrapper>
    </Link>
  )
}
