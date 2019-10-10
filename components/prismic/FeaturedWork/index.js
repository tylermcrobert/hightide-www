import React from 'react'
import { RichText } from 'prismic-reactjs'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Link from 'next/link'
import { sizes } from 'style/theme'
import SectionHead from 'components/SectionHead'

const FeaturedWork = ({ caseStudies, heading }) => {
  console.log(caseStudies)
  if (caseStudies && caseStudies.length) {
    return (
      <>
        <SectionHead line link="See All">
          {heading}
        </SectionHead>
        {caseStudies.map(item => (
          <CaseStudy data={item} />
        ))}
      </>
    )
  }
  return null
}

const CaseStudy = ({ data }) => {
  return <div>{data.slug}</div>
}
export default FeaturedWork

/*


<Link as={`/work/${uid}`} href="/work/[uid]">
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

 */
