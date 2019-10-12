import { useContext, useRef, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
import Swiper from '../class/Swiper'

const swiper = new Swiper()

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const slideWrapperRef = useRef()

  const setSlide = useCallback(
    () => swiper.setSlide(-(index * (swiper.width / items.length))),
    [index, items.length]
  )

  // Register Element
  useEffect(() => {
    swiper.register(slideWrapperRef.current)

    return () => {
      swiper.removeListeners()
    }
  }, [])

  // handle swipe end
  const onSwipeEnd = e => {
    const direction = e.dir

    if (direction === 'Left' && index !== items.length - 1) getNext()
    else if (direction === 'Right' && index !== 0) getPrev()
    else {
      setSlide()
    }
  }

  // handle swipe
  const onSwipe = e => {
    const delta = -e.deltaX
    swiper.swipe(delta)
  }

  // handle index change
  useEffect(() => {
    setSlide()
  }, [index, items.length, setSlide])

  const handlers = useSwipeable({
    onSwiping: onSwipe,
    trackMouse: true,
    trackTouch: true,
    onSwiped: onSwipeEnd,
  })

  return { handlers, slideWrapperRef }
}
