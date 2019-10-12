import { useContext, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
import Swiper from '../class/Swiper'

const swiper = new Swiper()

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const slideWrapperRef = useRef()

  // Register Element
  useEffect(() => {
    swiper.register(slideWrapperRef.current)

    return () => {
      swiper.removeListeners()
    }
  }, [])

  // handle swipe end
  const onSwipeEnd = e => {
    swiper.recordDist(-e.deltaX)
    const direction = e.dir

    if (direction === 'Left') getNext()
    else if (direction === 'Right') getPrev()
  }

  // handle swipe
  const onSwipe = e => {
    const delta = -e.deltaX
    swiper.swipe(delta)
  }

  // handle index change
  useEffect(() => {
    swiper.setY(-(index * (swiper.width / items.length)))
  }, [index, items.length])

  const handlers = useSwipeable({
    onSwiping: onSwipe,
    trackMouse: true,
    trackTouch: true,
    onSwiped: onSwipeEnd,
  })

  return { handlers, slideWrapperRef }
}
