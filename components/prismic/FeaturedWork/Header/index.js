import { useContext } from 'react'
import Link from 'next/link'
import SectionHead from 'components/SectionHead'
import { FeaturedWorkCtx } from '..'

const WorkLink = () => (
  <Link href="/work">
    <a>See All</a>
  </Link>
)

const Header = () => {
  const { heading } = useContext(FeaturedWorkCtx)
  return <SectionHead link={<WorkLink />}>{heading}</SectionHead>
}

// Header.propTypes = {}

export default Header
