import React from 'react'
// import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'

export default function JournalIndex({ data }) {
  console.log()
  return (
    <Wrap>
      <Section>
        <Styled.Wrapper>
          {data.results.map(item => {
            const title = RichText.asText(item.data.title)
            const mainImg = item.data.main_image.url
            const phoneImg =
              item.data.main_image.phone && item.data.main_image.phone.url

            console.log(phoneImg)

            return (
              <Link href={`/journal/${item.uid}/`}>
                <a>
                  <img src={phoneImg || mainImg} />
                  <h5>{title}</h5>
                </a>
              </Link>
            )
          })}
        </Styled.Wrapper>
      </Section>
    </Wrap>
  )
}
