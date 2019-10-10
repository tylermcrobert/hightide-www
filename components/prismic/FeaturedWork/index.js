import React, { createContext } from 'react'
import Header from './Header'
import CaseStudies from './CaseStudies'

export const FeaturedWorkCtx = createContext()

const FeaturedWork = ({ caseStudies, heading }) => {
  if (caseStudies && caseStudies.length) {
    return (
      <FeaturedWorkCtx.Provider value={{ caseStudies, heading }}>
        <Header />
        <CaseStudies />
      </FeaturedWorkCtx.Provider>
    )
  }
  return null
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
