import { useRef, useEffect } from 'react'
import TweenMax from 'gsap'

const useResize = active => {
  const bodyRef = useRef()
  const initHeight = useRef()

  const setHeight = val => {
    TweenMax.to(bodyRef.current, 0.25, {
      height: val,
    })
  }

  useEffect(() => {
    initHeight.current = bodyRef.current.offsetHeight
  }, [])

  useEffect(() => {
    if (!active) {
      setHeight(0)
    } else {
      setHeight(initHeight.current)
    }
  }, [active])

  return bodyRef
}

export default useResize
