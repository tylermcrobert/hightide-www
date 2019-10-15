import { useRef, useEffect, useCallback } from 'react'
import { TweenMax } from 'gsap'

const DEFAULT = 250

export default function useMarquee(speed) {
  const container = useRef()
  const wrapper = useRef()
  const containerWidth = useRef()
  const inner = useRef()
  const tween = useRef()

  const getDuration = useCallback(
    () => containerWidth.current / (DEFAULT * speed),
    [speed]
  )

  const setWrapWidth = () => {
    wrapper.current.style.width = ''
    containerWidth.current = inner.current.offsetWidth * 2
    wrapper.current.style.width = `${containerWidth.current}px`
  }

  const handleResize = () => {
    setWrapWidth()
    const dur = getDuration()
    tween.current.duration(dur)
  }

  const animate = useCallback(() => {
    const duration = getDuration()

    tween.current = TweenMax.to(wrapper.current, duration, {
      x: '-50%',
      /* eslint-disable no-undef */
      ease: Linear.easeNone,
      repeat: -1,
    })
  }, [getDuration])

  // setup on mount
  useEffect(() => {
    wrapper.current = container.current.querySelector('.mq-wrapper')
    inner.current = container.current.querySelector('.mq-inner')
    setWrapWidth()
    animate()
  }, [animate])

  // setup and clean up listeners
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return { ref: container }
}
