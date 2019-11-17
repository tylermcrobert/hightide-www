import { createRef, useEffect, useContext } from 'react'
import { CarouselCtx } from '../..'
// import 'flickity/dist/flickity.min.css'

/* eslint-disable global-require */

const flickity = createRef()
const ref = createRef()

const OPTIONS = {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
}

/**
 * Mount flickity
 */

const useMount = () => {
  useEffect(() => {
    const Flickity = require('flickity')
    flickity.current = new Flickity(ref.current, OPTIONS)
  }, [])
}

/**
 * Watch for changes in react index
 * and change them in the carousel
 */

const useIndexChange = () => {
  const { index, setCurrentIndex } = useContext(CarouselCtx)

  // watch on index change
  useEffect(() => {
    flickity.current.select(index)
  }, [index])

  useEffect(() => {
    flickity.current.on('change', i => {
      setCurrentIndex(i)
    })
  }, [setCurrentIndex])
}

const useFlickity = () => {
  useMount()
  useIndexChange()

  return ref
}

export default useFlickity
