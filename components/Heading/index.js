import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HEADING_LEVELS } from 'style/GlobalStyle'

function Heading({ children, headingStyle, as, ...props }) {
  return (
    <HeadStyle {...props} headingStyle={headingStyle} as={as}>
      {children}
    </HeadStyle>
  )
}

const HeadStyle = styled.h1`
  ${props => HEADING_LEVELS[props.headingStyle]}
  margin-bottom: ${props => props.theme.fontSizes[2]}
`
const VALID_ELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'li', 'div']

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(VALID_ELS).isRequired,
  headingStyle: PropTypes.oneOf(
    Array.from({ length: HEADING_LEVELS.length }).map((_, i) => i)
  ),
}

Heading.defaultProps = {
  headingStyle: 1,
}

export default Heading
