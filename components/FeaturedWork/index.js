import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import SectionHead from '../SectionHead'

function FeaturedWork({ name, img, imgRatio }) {
  return (
    <div>
      <SectionHead link={<a href="">{name}</a>}>Featured Project</SectionHead>
      <LazyImg src={img} ratio={imgRatio} alt="" />
    </div>
  )
}

FeaturedWork.Wrapper = ({ data }) => {
  const { width, height } = data.image.dimensions

  return (
    <FeaturedWork
      imgRatio={height / width}
      name={RichText.asText(data.name)}
      img={data.image.url}
    />
  )
}

export default FeaturedWork
