import { useContext, createRef, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
/* eslint-disable no-param-reassign */

const PARALLAX_VAL = 1.5
const BOUNDS = 200
const wrapperRef = createRef()
const slideWrapper = createRef()
const xOffset = createRef(0)

/**
 *
 * Use Handlers
 *
 */

const useDOMMutation = () => {
  const { index, items } = useContext(CarouselCtx)

  const setTransition = (isTransition = true) => {
    if (!isTransition) {
      slideWrapper.current.style.transitionDuration = '0ms'
    } else {
      slideWrapper.current.style.transitionDuration = '400ms'
    }
  }

  // block/unblock pointer events
  const setPointerEvents = (val = 'none') => {
    const slides = slideWrapper.current.querySelectorAll('.slide')

    Array.prototype.forEach.call(slides, slide => {
      slide.style.pointerEvents = val
    })
  }

  // Move slide
  const setTransformX = useCallback(dist => {
    slideWrapper.current.style.transform = `translateX(${dist}px)`
  }, [])

  // Move slide based on index
  const moveSlideByIndex = () => {
    const recordXVal = () => {
      // get 'transform' style
      const transformVal = slideWrapper.current.style.transform

      if (transformVal) {
        // Parse as number
        const parsedX = parseInt(transformVal.split('(')[1].split('px')[0], 0)
        xOffset.current = parsedX
      }
    }

    const wrapWidth = slideWrapper.current.offsetWidth
    const indexDist = -(index * (wrapWidth / items.length))

    setTransformX(indexDist)
    setPointerEvents('inherit')
    recordXVal()
  }

  return {
    moveSlideByIndex,
    setTransition,
    setTransformX,
    setPointerEvents,
  }
}

/**
 *
 * Use Handlers
 *
 */

const useHandlers = () => {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const {
    setTransition,
    setPointerEvents,
    moveSlideByIndex,
    setTransformX,
  } = useDOMMutation()

  const onSwipe = e => {
    const getSwipeDistance = () => {
      const wrapperWidth = slideWrapper.current.offsetWidth
      const containerWidth = wrapperRef.current.offsetWidth

      const delta = -e.deltaX
      const swipeDistance = delta * PARALLAX_VAL + xOffset.current

      const maxDist = -(wrapperWidth - containerWidth + BOUNDS)
      const minDist = BOUNDS

      if (swipeDistance > minDist) return minDist
      if (swipeDistance < maxDist) return maxDist

      return swipeDistance
    }

    const swipeDist = getSwipeDistance()

    setPointerEvents('none')
    setTransition(false)
    setTransformX(swipeDist)
  }

  const onSwipeEnd = e => {
    setTransition(true)

    const direction = e.dir

    // Change carousel index on swipe
    if (direction === 'Left' && index !== items.length - 1) getNext()
    else if (direction === 'Right' && index !== 0) getPrev()
    // snap back to first or last
    else {
      moveSlideByIndex()
    }
  }

  const handlers = useSwipeable({
    delta: 10,
    onSwiping: onSwipe,
    trackMouse: true,
    trackTouch: true,
    onSwiped: onSwipeEnd,
  })

  return handlers
}

/**
 *
 * useResize
 *
 * Listens to window resize
 * and appropriately moves X
 *
 */

const useResize = () => {
  const { moveSlideByIndex } = useDOMMutation()

  useEffect(() => {
    slideWrapper.current = wrapperRef.current.querySelector('.js-swipe')
    window.addEventListener('resize', moveSlideByIndex)

    return () => {
      window.removeEventListener('resize', moveSlideByIndex)
    }
  }, [moveSlideByIndex])
}

/**
 *
 * useDragDisable
 *
 * Disables drag issue in firefox
 *
 */

function useDragDisable() {
  useEffect(() => {
    const images = [...wrapperRef.current.querySelectorAll('div')]
    images.forEach(item => {
      item.onmousedown = e => e.preventDefault()
    })
  }, [])
}

/**
 *
 * useIndexChange
 *
 * listens for index change in context
 *
 */

const useIndexChange = () => {
  const { index } = useContext(CarouselCtx)
  const { setTransition, moveSlideByIndex } = useDOMMutation()

  // on index change
  useEffect(() => {
    setTransition(true)
    moveSlideByIndex()
  }, [index, moveSlideByIndex, setTransition])
}

/**
 *
 * useSwipe
 *
 * listens for index change in context
 *
 */

export default function useSwipe() {
  const handlers = useHandlers()
  useResize()
  useDragDisable()
  useIndexChange()

  return { handlers, wrapperRef }
}
