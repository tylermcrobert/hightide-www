import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import useHoverWord from './useHoverWord'

function CursorHover({ children, hover, ...props }) {
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

CursorHover.defaultProps = {
  children: null,
}

CursorHover.propTypes = {
  children: PropTypes.any,
  hover: PropTypes.any.isRequired,
}

export default CursorHover
