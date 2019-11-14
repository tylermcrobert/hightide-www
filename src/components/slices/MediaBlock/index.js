import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from 'components/Section'
import * as Gallery from 'components/Gallery'
import textExists from 'util/textExists'
import getImageSize from 'util/getImageSize'
import { sizes } from 'style/theme'
import getResponsiveImage from 'util/getResponsiveImage'
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

const MediaBlock = ({ data }) => {
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
  const isFull = layout !== 'Half-Width'

  const src = getImageSize(imgSrc, {
    w: isFull ? 2400 : 1020,
    fm: 'webp',
  })

  const { srcSet } = getResponsiveImage(imgSrc)

  const imgSizes = `
    (min-width: ${sizes.sm}px) ${isFull ? '100vw' : '50vw'},
    100vw
  `

  return (
    <Gallery.ImageWrap span={getSpanFromLayoutText(layout)}>
      <img src={src} srcSet={srcSet} sizes={imgSizes} alt="" />

      {textExists(caption) && (
        <Gallery.TextWrap>{RichText.render(caption)}</Gallery.TextWrap>
      )}
    </Gallery.ImageWrap>
  )
}

export default MediaBlock
