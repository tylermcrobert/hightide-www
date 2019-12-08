import { useEffect, useRef } from 'react'

const useCursor = (): React.Ref<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMove = e => {
      const x = e.clientX
      const y = e.clientY

      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    document.addEventListener('mousemove', handleMove)

    return () => {
      document.removeEventListener('mousemove', handleMove)
    }
  })

  return ref
}

export default useCursor
