import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HEADING_LEVELS } from '../../style/GlobalStyle'

function Heading({ children, level, headingStyle }) {
  return (
    <HeadStyle headingStyle={headingStyle} as={`h${level}`}>
      {children}
    </HeadStyle>
  )
}

const HeadStyle = styled.h1`
  ${props => HEADING_LEVELS[props.headingStyle]}
`

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  headingStyle: PropTypes.oneOf(
    Array.from({ length: HEADING_LEVELS.length }).map((_, i) => i)
  ),
}

Heading.defaultProps = {
  headingStyle: 1,
}

export default Heading
