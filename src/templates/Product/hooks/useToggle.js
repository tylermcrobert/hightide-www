import { useRef, useEffect } from 'react'

const useToggle = () => {
  const toggleIndex = useRef(null)
  const container = useRef()

  useEffect(() => {
    const headings = container.current.querySelectorAll('div > ul > li')
    const descs = container.current.querySelectorAll('div > ul > ul')

    const expand = i => {
      toggleIndex.current = i === toggleIndex.current ? null : i

      descs.forEach(item => {
        item.classList.remove('is-current')
      })

      if (toggleIndex.current !== null) {
        descs[toggleIndex.current].classList.add('is-current')
      }
    }

    headings.forEach((item, i) =>
      item.addEventListener('click', () => expand(i))
    )

    return () => {
      headings.forEach((item, i) =>
        item.removeEventListener('click', () => expand(i))
      )
    }
  }, [])

  return container
}

export default useToggle
