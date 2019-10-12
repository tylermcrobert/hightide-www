import { useContext, useRef, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CarouselCtx } from '../..'

class Swiper {
  constructor() {
    this.dist = 0
  }

  register(el) {
    this.el = el
  }

  translateY(dist) {
    this.el.style.transform = `translate3d(${this.dist + dist}px, 0, 0)`
  }

  recordDist(dist) {
    this.dist = this.dist + dist
  }
}

const swiper = new Swiper()

function useAdvance() {
  const { index } = useContext(CarouselCtx)
  useEffect(() => {}, [index])
}

export default function useSwipe() {
  const { getNext, getPrev } = useContext(CarouselCtx)
  const slideWrapperRef = useRef()

  useEffect(() => {
    swiper.register(slideWrapperRef.current)
  }, [])

  useAdvance()

  function handleSwiped(e) {
    const direction = e.dir
    swiper.recordDist(-e.deltaX)

    /* nav */
    if (direction === 'Left') getNext()
    else if (direction === 'Right') getPrev()
  }

  function handleSwiping(e) {
    const distance = -e.deltaX
    swiper.translateY(distance)
  }

  const handlers = useSwipeable({
    onSwiping: handleSwiping,
    trackMouse: true,
    trackTouch: true,
    onSwiped: handleSwiped,
  })

  return { handlers, slideWrapperRef }
}
