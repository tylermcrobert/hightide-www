import React from 'react'
import * as Carousel from 'components/Carousel'
import PropTypes from 'prop-types'
import Link from 'next/link'
import SectionHead from 'components/SectionHead'
import AspectImage from 'components/AspectImage'

const CarouselConsumer = Carousel.CarouselCtx.Consumer

const FeaturedWork = ({ caseStudies }) => {
  if (caseStudies && caseStudies.length) {
    const images = caseStudies.map(({ data, uid }) => (
      <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
        <a>
          <AspectImage>
            <picture>
              <source
                srcSet={data.image.small.url}
                media="(max-width: 800px)"
              />
              <img src={data.image.url} alt="" />
            </picture>
          </AspectImage>
        </a>
      </Link>
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
                    <a>{title}</a>
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
}

export default FeaturedWork
