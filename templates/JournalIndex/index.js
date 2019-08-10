import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap } from '../../style'
import Styled from './Styled'

export default function JournalIndex({ data }) {
  return (
    <Wrap>
      <Styled.Wrapper>
        {data.results.map(item => {
          const publishDate = item.data.date
          const formattedDate = publishDate.replace(/-/g, '.')
          const title = RichText.asText(item.data.title)
          const mainImg = item.data.main_image.url
          const phoneImg =
            item.data.main_image.phone && item.data.main_image.phone.url

          console.log()

          return (
            <Link
              href="/journal/[uid]"
              as={`/journal/${item.uid}/`}
              key={item.uid}
            >
              <a>
                <Styled.Img
                  src={phoneImg || mainImg}
                  alt={`${title} - High Tide`}
                />
                <Styled.PostDesc>
                  <Styled.PostTitle>{title}</Styled.PostTitle>
                  <h5>{formattedDate}</h5>
                </Styled.PostDesc>
              </a>
            </Link>
          )
        })}
      </Styled.Wrapper>
    </Wrap>
  )
}
