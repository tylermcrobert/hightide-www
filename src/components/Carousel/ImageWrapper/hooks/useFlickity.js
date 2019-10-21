import { createRef, useEffect, useContext, useRef } from 'react'
import { CarouselCtx } from '../..'
import 'flickity/dist/flickity.min.css'

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

function getIsNext(e) {
  const targetRect = e.target.getBoundingClientRect()
  const w = targetRect.width
  const x = e.clientX - targetRect.x
  // get percent of mouse relative to target
  const xPerc = Math.round((x / w) * 100)
  return xPerc > 50
}

const useNav = () => {
  const { getNext, getPrev } = useContext(CarouselCtx)
  const isNext = useRef()

  useEffect(() => {
    const handleHover = e => {
      isNext.current = getIsNext(e)
      ref.current.style.cursor = isNext.current ? 'e-resize' : 'w-resize'
    }

    const handleClick = () => {
      if (isNext.current) getNext()
      else getPrev()
    }

    ref.current.addEventListener('click', handleClick)
    ref.current.addEventListener('mousemove', handleHover)

    return () => {
      ref.current.removeEventListener('click', handleClick)
      ref.current.removeEventListener('mousemove', handleHover)
    }
  })
}

const useFlickity = () => {
  useMount()
  useIndexChange()
  useNav()

  return ref
}

export default useFlickity
