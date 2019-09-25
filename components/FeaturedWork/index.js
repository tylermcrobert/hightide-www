import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import NextLink from 'next/link'
import SectionHead from '../SectionHead'

function FeaturedWork({ name, img, imgRatio, uid }) {
  const Link = ({ children }) => (
    <NextLink href={`work/${uid}`}>
      <a>{children}</a>
    </NextLink>
  )
  return (
    <div>
      <SectionHead link={<Link>{name}</Link>}>Featured Project</SectionHead>
      <Link>
        <LazyImg src={img} ratio={imgRatio} alt="" />
      </Link>
    </div>
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
      uid={data.uid}
    />
  )
}

export default FeaturedWork
