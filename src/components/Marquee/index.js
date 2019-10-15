import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import useMarquee from './hooks/useMarquee'

function Marquee({ children, speed }) {
  const { ref } = useMarquee(speed)

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Track className="mq-wrapper">
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
