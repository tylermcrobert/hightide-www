import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from 'components/Section'

import textExists from 'util/textExists'
import getImageSize from 'util/getImageSize'
import { sizes } from 'style/theme'
import getResponsiveImage from 'util/getResponsiveImage'
import PropTypes from 'prop-types'
import Styled from './styled'
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
      <Styled.Wrapper>
        {data.items.map((item, i) => (
          <Styled.Item key={i} span={getSpanFromLayoutText(item.layout)}>
            <GalleryItem data={item} />
          </Styled.Item>
        ))}
      </Styled.Wrapper>
    </Section>
  )
}

MediaBlock.propTypes = {
  data: PropTypes.object.isRequired,
}

/*
  Item that goes in gallery
 */

const GalleryItem = ({ data }) => {
  if (data.video.url) {
    return (
      <video autoPlay loop muted playsInline>
        <source type="video/mp4" src={data.video.url} />
      </video>
    )
  }

  if (data.img.url) {
    return <Image src={data.img.url} caption={data.desc} layout={data.layout} />
  }

  return null
}

GalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
}

function Image({ src: imgSrc, caption, layout }) {
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
    <>
      <img src={src} srcSet={srcSet} sizes={imgSizes} alt="" />
      {textExists(caption) && (
        <div className="text-wrap">{RichText.render(caption)}</div>
      )}
    </>
  )
}

Image.defaultProps = {
  caption: [],
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.array,
  layout: PropTypes.string.isRequired,
}

export default MediaBlock
