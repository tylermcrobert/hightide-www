import React, { useRef, useEffect, useState } from 'react'
import Styled from './Styled'

function Marquee({ children }) {
  const [width, setWidth] = useState()
  const [paused, setPaused] = useState(false)
  const ref = useRef()

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])

  return (
    <Styled.Wrapper
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Styled.Track width={width * 2} paused={paused}>
        <div ref={ref}>{children}</div>
        <div>{children}</div>
      </Styled.Track>
    </Styled.Wrapper>
  )
}

// .propTypes = {}

export default Marquee
