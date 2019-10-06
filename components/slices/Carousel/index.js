import React, { useContext, useState, createContext } from 'react'
import Section from 'components/Section'
import PropTypes from 'prop-types'
import Fpo from 'components/Fpo'

const CarouselCtx = createContext()
function Carousel({ data }) {
  const aspects = data.items.map(item => {
    const dims = item.carousel_image.dimensions
    return dims.height / dims.width
  })

  const smallestAspect = Math.min(...aspects)

  const urls = data.items.map(item => item.carousel_image.url)
  return (
    <Section>
      <Fpo>
        <Layout urls={urls} smallestAspect={smallestAspect} />
      </Fpo>
    </Section>
  )
}

const Layout = ({ urls, smallestAspect }) => {
  const [index, setCurrentIndex] = useState(0)

  const { length } = urls
  const nextIndex = (index + 1) % urls.length
  const prevIndex = (index + length - 1) % length

  const getNext = () => setCurrentIndex(nextIndex)
  const getPrev = () => setCurrentIndex(prevIndex)

  return (
    <CarouselCtx.Provider
      value={{ smallestAspect, length, index, getNext, getPrev }}
    >
      {urls.map((url, i) => (
        <Image url={url} key={url} active={i === index} />
      ))}
      <Navigation />
    </CarouselCtx.Provider>
  )
}

Layout.propTypes = {
  urls: PropTypes.array.isRequired,
  smallestAspect: PropTypes.number.isRequired,
}

const Navigation = () => {
  const { getNext, getPrev, length, index } = useContext(CarouselCtx)
  return (
    <div>
      {index + 1} of {length}
      <div onClick={getPrev}>Prev</div>
      <div onClick={getNext}>Next</div>
    </div>
  )
}

const Image = ({ url, active }) => {
  return active ? <img src={url} alt="" /> : null
}

// Carousel.propTypes = {}

export default Carousel
