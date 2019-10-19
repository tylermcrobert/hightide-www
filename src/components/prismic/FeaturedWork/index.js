import React, { createContext } from 'react'
import * as Carousel from 'components/Carousel'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AspectImage from 'components/AspectImage'
import SectionHead from 'components/SectionHead'

const CarouselConsumer = Carousel.CarouselCtx.Consumer

const FeaturedWork = ({ caseStudies }) => {
  if (caseStudies && caseStudies.length) {
    const images = caseStudies.map(({ data }) => (
      <a>
        <AspectImage src={data.image.url} alt="" />
      </a>
    ))

    return (
      <Carousel.Wrapper items={images}>
        <CarouselConsumer>
          {({ index }) => {
            const currentCs = caseStudies[index]
            const { uid } = currentCs
            const title = currentCs.data.name[0].text

            return (
              <>
                <SectionHead link={<Carousel.FractionIndicator />} noArrow>
                  <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
                    {title}
                  </Link>
                </SectionHead>
                <Carousel.ImageWrapper />
              </>
            )
          }}
        </CarouselConsumer>
      </Carousel.Wrapper>
    )
  }
  return null
}

FeaturedWork.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
}

export default FeaturedWork
