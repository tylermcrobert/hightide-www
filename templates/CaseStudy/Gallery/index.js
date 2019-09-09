import React, { useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import textExists from '../../../util/textExists'
import formatTitle from '../../../util/formatTitle'
import TextWrap from '../../../components/TextWrap'
import { Section } from '../../../style'
import Styled from './Styled'
import { CaseStudyCtx } from '..'
// import PropTypes from 'prop-types'

function Gallery({ data, paragraph, mainImg }) {
  const { title } = useContext(CaseStudyCtx)
  return (
    <>
      <Section>
        {mainImg && <LazyImg src={mainImg} alt={formatTitle(title)} />}
      </Section>
      {textExists(paragraph) && (
        <Section>
          <TextWrap center>{RichText.render(paragraph)}</TextWrap>
        </Section>
      )}
      <Section>
        <Styled.GalleryWrap>
          {data.map(({ imageDesc, gallery }) => (
            <div>
              {gallery && <LazyImg src={gallery} alt={formatTitle(title)} />}
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
