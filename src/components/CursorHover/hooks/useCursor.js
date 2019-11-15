import { useEffect, useRef } from 'react'

const useCursor = () => {
  const ref = useRef()

  useEffect(() => {
    const handleMove = e => {
      const x = e.clientX
      const y = e.clientY

      ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    document.addEventListener('mousemove', handleMove)

    return () => {
      document.removeEventListener('mousemove', handleMove)
    }
  })

  return ref
}

export default useCursor
