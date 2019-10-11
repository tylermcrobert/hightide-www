import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'

function Marquee({ children, speed }) {
  const [width, setWidth] = useState(0)
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
      <Styled.Track width={width * 2} speed={speed} paused={paused}>
        <div ref={ref}>{children}</div>
        <div>{children}</div>
      </Styled.Track>
    </Styled.Wrapper>
  )
}

Marquee.defaultProps = {
  speed: 10,
}

Marquee.propTypes = {
  children: PropTypes.any.isRequired,
  speed: PropTypes.number,
}

export default Marquee
