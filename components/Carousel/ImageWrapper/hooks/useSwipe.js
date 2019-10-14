import { useContext, useRef, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
/* eslint-disable no-param-reassign */

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const wrapperRef = useRef()
  const el = useRef()
  const xOffset = useRef(0)

  const setTransition = (isTransition = true) => {
    if (!isTransition) {
      el.current.style.transitionDuration = '0ms'
    } else {
      el.current.style.transitionDuration = '400ms'
    }
  }

  // block/unblock pointer events
  const setPointerEvents = (val = 'none') => {
    const slides = el.current.querySelectorAll('.slide')

    Array.prototype.forEach.call(slides, slide => {
      slide.style.pointerEvents = val
    })
  }

  // Move slide
  const setTransformX = useCallback(dist => {
    el.current.style.transform = `translateX(${dist}px)`
  }, [])

  // Move slide based on index
  const moveSlideByIndex = useCallback(() => {
    const recordXVal = () => {
      // get 'transform' style
      const transformVal = el.current.style.transform

      if (transformVal) {
        // Parse as number
        const parsedX = parseInt(transformVal.split('(')[1].split('px')[0], 0)
        xOffset.current = parsedX
      }
    }

    const distOfIndex = -(index * (el.current.offsetWidth / items.length))
    setTransformX(distOfIndex)
    setPointerEvents('inherit')
    recordXVal()
  }, [index, items.length, setTransformX])

  /**
   * On mount
   */
  useEffect(() => {
    el.current = wrapperRef.current.querySelector('.js-swipe')
    window.addEventListener('resize', moveSlideByIndex)

    return () => {
      window.removeEventListener('resize', moveSlideByIndex)
    }
  }, [items, moveSlideByIndex])

  /**
   * On Swipe
   */
  const onSwipe = e => {
    // Get swipe delta
    const delta = -e.deltaX

    setPointerEvents('none')
    setTransition(false)
    setTransformX(delta + xOffset.current)
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
