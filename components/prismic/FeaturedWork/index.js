import React, { createContext } from 'react'
import * as Carousel from 'components/Carousel'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AspectImage from 'components/AspectImage'
import Header from './Header'

export const FeaturedWorkCtx = createContext()

const FeaturedWork = ({ caseStudies, heading }) => {
  if (caseStudies && caseStudies.length) {
    const images = caseStudies.map(({ uid, data }) => (
      <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
        <a>
          <AspectImage src={data.image.url} alt="" />
        </a>
      </Link>
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

FeaturedWork.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
}

export default FeaturedWork
