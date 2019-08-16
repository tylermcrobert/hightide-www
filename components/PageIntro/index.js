import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import Heading from '../Heading'
import TextWrap from '../TextWrap'

function PageIntro({ children }) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}

PageIntro.Body = ({ children, ...props }) => (
  <TextWrap {...props}>{children}</TextWrap>
)

PageIntro.Heading = ({ children, ...props }) => (
  <Heading headingStyle={1} as="h1" {...props}>
    {children}
  </Heading>
)

PageIntro.propTypes = {
  children: PropTypes.any.isRequired,
}

PageIntro.Heading.propTypes = {
  children: PropTypes.string.isRequired,
}

PageIntro.Body.propTypes = {
  children: PropTypes.element.isRequired,
}
export default PageIntro
