import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import MarqueeController from './MarqueeController'

const marquee = new MarqueeController()

function Marquee({ children, speed }) {
  const [paused, setPaused] = useState(false)
  const wrapperRef = useRef()

  useEffect(() => {
    marquee.init(wrapperRef.current, speed)

    return () => {
      marquee.destroy()
    }
  }, [speed])

  return (
    <Styled.Wrapper
      ref={wrapperRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Styled.Track className="mq-wrapper" paused={paused}>
        <div className="mq-inner">{children}</div>
        <div className="mq-inner">{children}</div>
      </Styled.Track>
    </Styled.Wrapper>
  )
}

Marquee.defaultProps = {
  speed: 1,
}

Marquee.propTypes = {
  children: PropTypes.any.isRequired,
  speed: PropTypes.number,
}

export default Marquee
