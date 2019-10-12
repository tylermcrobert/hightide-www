import { useContext, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'

class Swiper {
  constructor() {
    this.dist = 0
    this.width = 0
  }

  register(el) {
    this.el = el
    this.setWidth()
  }

  swipe = delta => {
    const adv = this.dist + delta
    this.setY(adv)
  }

  setY = dist => {
    this.el.style.transform = `translate3d(${dist}px, 0, 0)`
  }

  recordDist = dist => {
    this.dist = this.dist + dist
  }

  addListners = () => {
    window.addEventListener('resize', this.handleResize)
  }

  removeListeners = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  setWidth = () => {
    this.width = this.el.offsetWidth
  }

  handleResize = () => {
    this.setWidth()
  }
}

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
    console.log(swiper.width / items.length)
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
