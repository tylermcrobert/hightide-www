import { useContext, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'
import Swiper from '../class/Swiper'

const swiper = new Swiper()

/**
  Main Hook
 */

export default function useSwipe() {
  const { getNext, getPrev, index, items } = useContext(CarouselCtx)
  const slideWrapperRef = useRef()

  /**
   * Handle El
   */
  useEffect(() => {
    swiper.register(slideWrapperRef.current)
    swiper.addListners()
    return () => {
      swiper.removeListeners()
    }
  }, [])

  /**
   * Handle advancement of 'index'
   */

  useEffect(() => {
    swiper.setY(-(index * (swiper.width / items.length)))
  }, [index, items.length])

  /**
   * Handle end of swipe
   */
  const handleSwipeEnd = e => {
    const direction = e.dir
    swiper.recordDist(-e.deltaX)

    /* nav */
    if (direction === 'Left') getNext()
    else if (direction === 'Right') getPrev()
  }

  /**
   * Handle Swipe
   */
  const handleSwiping = e => {
    const delta = -e.deltaX
    swiper.swipe(delta)
  }

  const handlers = useSwipeable({
    onSwiping: handleSwiping,
    trackMouse: true,
    trackTouch: true,
    onSwiped: handleSwipeEnd,
  })

  return { handlers, slideWrapperRef }
}
