import { useRef, useEffect, createRef } from 'react'
import TweenMax from 'gsap'

const DEFAULT = 250
const container = createRef()
const wrapper = createRef()
const inner = createRef()

const animSpeed = createRef()
const tween = createRef()

/**
 * Create functions for updating DOM
 */

function useDOMFunctions() {
  const containerWidth = useRef()

  const setWrapWidth = () => {
    wrapper.current.style.width = ''
    containerWidth.current = inner.current.offsetWidth * 2
    wrapper.current.style.width = `${containerWidth.current}px`
  }

  const getDuration = () =>
    containerWidth.current / (DEFAULT * animSpeed.current)

  return { setWrapWidth, getDuration }
}

/**
 * Handle resizing
 */

function useResize() {
  const { setWrapWidth, getDuration } = useDOMFunctions()

  const handleResize = () => {
    setWrapWidth()
    const dur = getDuration()
    tween.current.duration(dur)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
}

/**
 * UsePause
 */

function usePauseToggle() {
  useEffect(() => {
    const pauseTween = () => tween.current.pause()
    const resumeTween = () => tween.current.resume()

    container.current.addEventListener('mouseover', pauseTween)
    container.current.addEventListener('mouseleave', resumeTween)

    return () => {
      container.current.removeEventListener('mouseover', pauseTween)
      container.current.removeEventListener('mouseleave', resumeTween)
    }
  })
}

/**
 * This is where the magic happens
 */

function useAnimation() {
  const { setWrapWidth, getDuration } = useDOMFunctions()

  useEffect(() => {
    setWrapWidth()
    const duration = getDuration()
    tween.current = TweenMax.to(wrapper.current, duration, {
      x: '-50%',
      /* eslint-disable no-undef */
      ease: Linear.easeNone,
      repeat: -1,
    })
  }, [getDuration, setWrapWidth])
}

export default function useMarquee(speed) {
  animSpeed.current = speed

  // register DOM
  useEffect(() => {
    wrapper.current = container.current.querySelector('.mq-wrapper')
    inner.current = container.current.querySelector('.mq-inner')
  }, [])

  useAnimation()
  useResize()
  usePauseToggle()

  return { ref: container }
}
