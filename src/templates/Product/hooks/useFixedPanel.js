import { useRef, useEffect, useCallback } from 'react'

const useFixedPanel = () => {
  const ref = useRef()
  const ticking = useRef(false)
  const lastScrollY = useRef()

  const setY = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = `translateY(${lastScrollY.current}px)`
    }
  }, [])

  const update = useCallback(() => {
    setY()
    ticking.current = false
  }, [setY])

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(update)
      ticking.current = true
    }
  }, [update])

  const onScroll = useCallback(() => {
    lastScrollY.current = window.scrollY
    requestTick()
  }, [requestTick])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    console.log('asdf')

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return ref
}

export default useFixedPanel
