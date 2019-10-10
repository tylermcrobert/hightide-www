import { useContext, useState } from 'react'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { FeaturedWorkCtx } from '..'

const CaseStudies = () => {
  const { caseStudies } = useContext(FeaturedWorkCtx)
  const [index, setIndex] = useState(0)

  const { length } = caseStudies
  const nextIndex = (index + 1) % length
  const prevIndex = (index + length - 1) % length

  const getNext = () => setIndex(nextIndex)
  const getPrev = () => setIndex(prevIndex)

  return (
    <div>
      <Item data={caseStudies[index]} />
      <span onClick={getPrev}>Prev</span>
      &nbsp;/&nbsp; &nbsp;
      <span onClick={getNext}>Next</span>
    </div>
  )
}

const Item = ({ data }) => {
  const img = data.data.image.url
  return (
    <div>
      <LazyImg src={img} />
    </div>
  )
}
export default CaseStudies
