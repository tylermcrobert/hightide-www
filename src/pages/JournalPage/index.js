import React from 'react'
import { Wrap, Section } from 'components/Styled'
import { RichText } from 'prismic-reactjs'
import Styled from './Styled'

function JournalPage({ data: apiData }) {
  const { data } = apiData
  console.log()
  return (
    <Wrap>
      <Section>
        <h2>{RichText.asText(data.title)}</h2>
        <img src={data.main_image.url} />
        {RichText.render(data.abstract)}
        {data.body.map(sliceItem => {
          switch (sliceItem.slice_type) {
            case 'post_gallery':
              return (
                <Section>
                  {sliceItem.items.map(galleryItem => (
                    <img src={galleryItem.gallery_image.url} />
                  ))}
                </Section>
              )
            case 'hero_image':
              console.log()
              return (
                <Section>
                  {sliceItem.items.map(item => (
                    <div>
                      <img src={item.hero_image.url} />
                      <Section>
                        <Styled.TextWrap>
                          {RichText.render(item.hero_note)}
                        </Styled.TextWrap>
                      </Section>
                    </div>
                  ))}
                </Section>
              )
            default:
              console.log('nothing built for ', sliceItem.slice_type)
              return null
          }
        })}
      </Section>
    </Wrap>
  )
}

// JournalPage.propTypes = {}

export default JournalPage
