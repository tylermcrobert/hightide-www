import React from 'react'
import { RichText } from 'prismic-reactjs'
import textExists from '../../../util/textExists'
import TextWrap from '../../../components/TextWrap'
import { Section } from '../../../style'
import Styled from './Styled'
// import PropTypes from 'prop-types'

function Gallery({ data, paragraph, mainImg }) {
  return (
    <>
      <Section>{mainImg && <img src={mainImg} />}</Section>
      <Section>
        <TextWrap center>{paragraph && RichText.render(paragraph)}</TextWrap>
      </Section>
      <Section>
        <Styled.GalleryWrap>
          {data.map(({ imageDesc, gallery }) => (
            <div>
              {gallery && <img src={gallery} />}
              {textExists(imageDesc) && RichText.render(imageDesc)}
            </div>
          ))}
        </Styled.GalleryWrap>
      </Section>
    </>
  )
}

Gallery.Wrapper = ({ data }) => {
  const items = data.items.map(item => ({
    gallery: item.image_gallery.url,
    imageDesc: item.image_description,
    imageTitle: item.image_title,
  }))

  const { primary } = data

  return (
    <Gallery
      data={items}
      paragraph={primary.gallery_text}
      mainImg={primary.gallery_main_image.url}
    />
  )
}
// Gallery.propTypes = {}

export default Gallery
