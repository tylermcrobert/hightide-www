import { useContext, useRef, useEffect } from 'react'
import TweenMax from 'gsap'
import { TextSwitcherCtx, ItemCtx } from '..'

const useResize = () => {
  const bodyRef = useRef()
  const initHeight = useRef()

  const { currentIndex } = useContext(TextSwitcherCtx)
  const { i } = useContext(ItemCtx)

  const isCurrent = currentIndex === i

  const setHeight = val => {
    TweenMax.to(bodyRef.current, 0.25, {
      height: val,
    })
  }

  useEffect(() => {
    initHeight.current = bodyRef.current.offsetHeight
  }, [])

  useEffect(() => {
    if (!isCurrent) {
      setHeight(0)
    } else {
      setHeight(initHeight.current)
    }
  }, [isCurrent])

  return bodyRef
}

export default useResize
