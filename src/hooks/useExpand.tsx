import { useRef, useEffect, createRef } from 'react'
import TweenMax from 'gsap'

const useResize = (active: boolean, speed = 0.25) => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const calculatedHeight = useRef<number>(0)
  const isInitial = useRef<boolean>(true)

  const calcHeight = (): void => {
    if (bodyRef.current) {
      calculatedHeight.current = bodyRef.current.offsetHeight
    }
  }

  const animateResize = (val: number) => {
    calcHeight()

    // if initial render, don't animate
    const animSpeed = isInitial.current ? 0 : speed

    // animate
    TweenMax.to(bodyRef.current, animSpeed, {
      height: val,
    })
  }

  // on initial mount
  useEffect(() => {
    if (bodyRef.current) {
      calcHeight()
      bodyRef.current.style.overflow = 'hidden'
    }
  }, [])

  useEffect(() => {
    const containerHeight = active ? calculatedHeight.current : 0
    animateResize(containerHeight)

    // disable 'isInitial'
    isInitial.current = false
  }, [active])

  return bodyRef
}

export default useResize
