import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from 'components/Section'
import * as Gallery from 'components/Gallery'
import textExists from 'util/textExists'
import getImageSize from 'util/getImageSize'

/*
  Take a string like 'Two-Col'
  and convert it to span amount
*/

const getSpanFromLayoutText = text => {
  switch (text) {
    case 'Full-Width':
      return 2
    case 'Half-Width':
      return 1
    default:
      return 2
  }
}

const ImageBlock = ({ data }) => {
  return (
    <Section>
      <Gallery.Wrapper>
        {data.items.map(
          (item, i) =>
            item.img.url && (
              <GalleryItem
                imgSrc={item.img.url}
                caption={item.desc}
                key={`${item.img.url}${i}`}
                layout={item.layout}
              />
            )
        )}
      </Gallery.Wrapper>
    </Section>
  )
}

/*
  Item that goes in gallery
 */

function GalleryItem({ imgSrc, caption, layout }) {
  const src = getImageSize(imgSrc, {
    w: layout === 'Half-Width' ? 1200 : 2400,
    format: 'jpg',
  })

  return (
    <Gallery.ImageWrap span={getSpanFromLayoutText(layout)}>
      <picture>
        <img src={src} alt="" />
      </picture>
      {textExists(caption) && (
        <Gallery.TextWrap>{RichText.render(caption)}</Gallery.TextWrap>
      )}
    </Gallery.ImageWrap>
  )
}

export default ImageBlock
