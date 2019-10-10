import { useContext, useState } from 'react'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { FeaturedWorkCtx } from '..'

const CaseStudies = () => {
  const { caseStudies } = useContext(FeaturedWorkCtx)
  const [index, setIndex] = useState(0)
  return (
    <div>
      <Item data={caseStudies[index]} />
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
