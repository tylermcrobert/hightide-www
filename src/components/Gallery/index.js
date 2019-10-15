/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'

export function Wrapper({ ...props }) {
  return <Styled.Gallery {...props} />
}

export function ImageWrap({ span, ...props }) {
  return <div className={`item span-${span}`} {...props} />
}

ImageWrap.propTypes = {
  span: PropTypes.number.isRequired,
}

export function TextWrap({ ...props }) {
  return <div className="text-wrap" {...props} />
}
