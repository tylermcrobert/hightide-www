import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import Arrow from '../Arrow'

function Header({ children, link, line, noArrow }) {
  return (
    <Styled.Header line={line}>
      <h5>{children}</h5>
      {link && (
        <h5>
          <Styled.HoverTransform>
            {link}
            <Styled.HoverTarget>{!noArrow && <Arrow />}</Styled.HoverTarget>
          </Styled.HoverTransform>
        </h5>
      )}
    </Styled.Header>
  )
}

Header.defaultProps = {
  line: false,
  link: null,
  noArrow: false,
}

Header.propTypes = {
  line: PropTypes.bool,
  link: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.string.isRequired,
  noArrow: PropTypes.bool,
}
export default Header
