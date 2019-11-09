import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import useHoverWord from './useHoverWord'

function HoverWord({ children, hover, ...props }) {
  const { wrapperRef, hoverRef } = useHoverWord()
  return (
    <Styled.HoverWrapper {...props} ref={wrapperRef}>
      <Styled.HoverText ref={hoverRef}>
        <Styled.HoverText.Inner>{hover}</Styled.HoverText.Inner>
      </Styled.HoverText>
      {children}
    </Styled.HoverWrapper>
  )
}

HoverWord.defaultProps = {
  children: null,
}

HoverWord.propTypes = {
  children: PropTypes.any,
  hover: PropTypes.string.isRequired,
}

export default HoverWord
