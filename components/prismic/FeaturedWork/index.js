import React, { createContext } from 'react'
import * as Carousel from 'components/Carousel'
import Header from './Header'

export const FeaturedWorkCtx = createContext()

const FeaturedWork = ({ caseStudies, heading }) => {
  if (caseStudies && caseStudies.length) {
    const images = caseStudies.map(item => (
      <img src={item.data.image.url} key={item.data.image.url} alt="" />
    ))

    return (
      <FeaturedWorkCtx.Provider value={{ caseStudies, heading }}>
        <Header />
        <Carousel.Wrapper items={images}>
          <Carousel.ImageWrapper />
          <Carousel.Nav />
        </Carousel.Wrapper>
      </FeaturedWorkCtx.Provider>
    )
  }
  return null
}

export default FeaturedWork
