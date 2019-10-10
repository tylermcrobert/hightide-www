import { useContext } from 'react'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { FeaturedWorkCtx } from '..'

const CaseStudies = () => {
  const { caseStudies } = useContext(FeaturedWorkCtx)
  return caseStudies.map(item => <Item data={item} key={item.id} />)
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
