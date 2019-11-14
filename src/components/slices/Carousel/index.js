import React from 'react'
import Section from 'components/Section'
import PropTypes from 'prop-types'
import { Wrapper as CarouselWrap, ImageWrapper } from 'components/Carousel'
import AspectImage from 'components/AspectImage'

function Carousel({ data }) {
  if (data) {
    const aspects = data.items.map(item => {
      const dims = item.carousel_image.dimensions
      return dims.height / dims.width
    })

    const smallestAspect = Math.min(...aspects)

    const images = data.items.map(item => (
      <AspectImage src={item.carousel_image.url} aspect={smallestAspect} />
    ))
    return (
      <Section>
        <CarouselWrap items={images}>
          <ImageWrapper />
        </CarouselWrap>
      </Section>
    )
  }
  return null
}

Carousel.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Carousel
