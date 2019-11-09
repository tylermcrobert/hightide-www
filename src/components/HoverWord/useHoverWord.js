import { useRef, useEffect } from 'react'

const useHoverWord = () => {
  const wrapperRef = useRef()
  const hoverRef = useRef()

  useEffect(() => {
    const $wrapper = wrapperRef.current

    const handleMouseOver = e => {
      const x = e.offsetX
      const y = e.offsetY

      hoverRef.current.style.display = 'block'
      hoverRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const handleMouseOut = () => {
      hoverRef.current.style.display = 'none'
    }

    $wrapper.addEventListener('mousemove', handleMouseOver)
    $wrapper.addEventListener('mouseout', handleMouseOut)

    return () => {
      $wrapper.removeEventListener('mousemove', handleMouseOver)
      $wrapper.removeEventListener('mouseout', handleMouseOut)
    }
  })

  return { wrapperRef, hoverRef }
}

export default useHoverWord
