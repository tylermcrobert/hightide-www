import { useContext, useRef, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
/* eslint-disable no-param-reassign */

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const wrapperRef = useRef()
  const slideWrapper = useRef()
  const xOffset = useRef(0)

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
  const moveSlideByIndex = useCallback(() => {
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
  }, [index, items.length, setTransformX])

  /**
   * On mount
   */
  useEffect(() => {
    slideWrapper.current = wrapperRef.current.querySelector('.js-swipe')
    window.addEventListener('resize', moveSlideByIndex)

    return () => {
      window.removeEventListener('resize', moveSlideByIndex)
    }
  }, [items, moveSlideByIndex])

  /**
   * On Swipe
   */
  const onSwipe = e => {
    const getSwipeDistance = () => {
      const BOUNDS = 200

      const wrapperWidth = slideWrapper.current.offsetWidth
      const containerWidth = wrapperRef.current.offsetWidth

      const delta = -e.deltaX
      const swipeDistance = delta + xOffset.current

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

  /**
   * On End
   */
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

  /**
   * On Index Change
   */
  useEffect(() => {
    setTransition(true)
    moveSlideByIndex()
  }, [index, moveSlideByIndex])

  const handlers = useSwipeable({
    onSwiping: onSwipe,
    trackMouse: true,
    trackTouch: true,
    onSwiped: onSwipeEnd,
  })

  return { handlers, wrapperRef }
}
