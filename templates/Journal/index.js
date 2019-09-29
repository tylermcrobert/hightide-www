import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import fmtDate from 'util/fmtDate'
import Styled from './Styled'
import getImage from './getImage'

export default function Journal({ results }) {
  return (
    <Wrap>
      <Styled.Wrapper>
        {results.map(({ data, uid }, i) => {
          const date = new Date(data.date)
          const formattedDate = fmtDate(date)
          const title = RichText.asText(data.title)
          const mainImg = data.main_image.url
          const thumbnail = data.thumbnail_image

          return (
            <JournalCard
              key={uid}
              uid={uid}
              mainImg={mainImg}
              thumbnail={thumbnail}
              date={formattedDate}
              title={title}
              large={!(i % 6) || !((i + 2) % 6)}
            />
          )
        })}
      </Styled.Wrapper>
    </Wrap>
  )
}

function JournalCard({ uid, mainImg, date, title, large, thumbnail }) {
  const image = getImage({ mainImg, thumbnail, large })
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
