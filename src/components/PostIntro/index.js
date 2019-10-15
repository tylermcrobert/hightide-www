import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import Heading from '../Heading'
import TextWrap from '../TextWrap'

function PostIntro({ children }) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}

PostIntro.Body = ({ children, ...props }) => (
  <TextWrap {...props}>{children}</TextWrap>
)

PostIntro.Heading = ({ children, ...props }) => (
  <Heading headingStyle={1} as="h1" {...props}>
    {children}
  </Heading>
)

PostIntro.propTypes = {
  children: PropTypes.any.isRequired,
}

PostIntro.Heading.propTypes = {
  children: PropTypes.string.isRequired,
}

PostIntro.Body.propTypes = {
  children: PropTypes.element.isRequired,
}
export default PostIntro
