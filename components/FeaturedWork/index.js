import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Link from 'next/link'
import { sizes } from 'style/theme'
import SectionHead from '../SectionHead'

function FeaturedWork({ name, imgSet, img, imgRatio, uid }) {
  return (
    <Link as={`/work/${uid}`} href="/work/">
      <a aria-label="Featured work">
        <div>
          <SectionHead link={name}>Featured Project</SectionHead>
          <picture>
            <source
              media={`(max-width: ${sizes.sm}px)`}
              srcSet={imgSet.small.url}
            />
            <LazyImg src={img} ratio={imgRatio} alt="" />
          </picture>
        </div>
      </a>
    </Link>
  )
}

FeaturedWork.Wrapper = ({ data }) => {
  const { image, name } = data.data
  const { width, height } = image.dimensions

  return (
    <FeaturedWork
      imgRatio={height / width}
      name={RichText.asText(name)}
      img={image.url}
      imgSet={image}
      uid={data.uid}
    />
  )
}

export default FeaturedWork
