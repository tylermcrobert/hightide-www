import React, { useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import Section from 'components/Section'
import * as Gallery from 'components/Gallery'
import textExists from 'util/textExists'
import { CaseStudyCtx } from '..'

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
  const { alt } = useContext(CaseStudyCtx)

  return (
    <Gallery.ImageWrap span={getSpanFromLayoutText(layout)}>
      <img src={imgSrc} alt={alt} />
      {textExists(caption) && (
        <Gallery.TextWrap>{RichText.render(caption)}</Gallery.TextWrap>
      )}
    </Gallery.ImageWrap>
  )
}

export default ImageBlock
