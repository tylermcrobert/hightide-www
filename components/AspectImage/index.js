import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding-top: ${props => props.aspect * 100}%;
  position: relative;
`

const Image = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const AspectImage = ({ src, aspect }) => (
  <Wrapper aspect={aspect}>
    <Image src={src} />
  </Wrapper>
)

AspectImage.defaultProps = {
  aspect: 2 / 3,
}

AspectImage.propTypes = {
  aspect: PropTypes.number,
  src: PropTypes.string.isRequired,
}

export default AspectImage
