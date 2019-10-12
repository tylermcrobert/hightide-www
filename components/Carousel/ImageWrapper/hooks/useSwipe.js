import { useContext, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
import Swiper from '../class/Swiper'

const swiper = new Swiper()

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const wrapperRef = useRef()

  // Register Element
  useEffect(() => {
    const el = wrapperRef.current.querySelector('.js-swipe')
    swiper.register(el, items.length)

    return () => {
      swiper.removeListeners()
    }
  }, [items])

  // handle swipe end
  const onSwipeEnd = e => {
    const direction = e.dir

    if (direction === 'Left' && index !== items.length - 1) getNext()
    else if (direction === 'Right' && index !== 0) getPrev()
    else {
      swiper.setSlide()
    }
  }

  // handle swipe
  const onSwipe = e => {
    const delta = -e.deltaX
    swiper.swipe(delta)
  }

  // handle index change
  useEffect(() => {
    swiper.setIndex(index)
    swiper.setSlide()
  }, [index, items.length])

  const handlers = useSwipeable({
    onSwiping: onSwipe,
    trackMouse: true,
    trackTouch: true,
    onSwiped: onSwipeEnd,
    preventDefaultTouchmoveEvent: true,
  })

  return { handlers, wrapperRef }
}
