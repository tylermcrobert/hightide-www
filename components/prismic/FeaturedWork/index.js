import React from 'react'
import * as Carousel from 'components/Carousel'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AspectImage from 'components/AspectImage'
import SectionHead from 'components/SectionHead'

const FeaturedWork = ({ caseStudies, heading }) => {
  if (caseStudies && caseStudies.length) {
    const images = caseStudies.map(({ uid, data }) => (
      <WorkLink uid={uid} key={uid}>
        <AspectImage src={data.image.url} alt="" />
      </WorkLink>
    ))

    return (
      <Carousel.Wrapper items={images}>
        <Carousel.CarouselCtx.Consumer>
          {({ index }) => (
            <>
              <SectionHead link={<HeaderLink data={caseStudies[index]} />}>
                {heading}
              </SectionHead>
              <Carousel.ImageWrapper />
              <Carousel.Nav />
            </>
          )}
        </Carousel.CarouselCtx.Consumer>
      </Carousel.Wrapper>
    )
  }
  return null
}

const HeaderLink = ({ data }) =>
  data ? <WorkLink uid={data.uid}>{data.data.name[0].text}</WorkLink> : null

const WorkLink = ({ uid, children, ...props }) => (
  <Link href="/work/[uid]" as={`/work/${uid}/`} {...props}>
    <a>{children}</a>
  </Link>
)

FeaturedWork.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
}

export default FeaturedWork
