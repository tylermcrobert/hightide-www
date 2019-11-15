import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding-top: ${props => props.aspect * 100}%;
  position: relative;
`

const AbsoluteObj = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Image = styled(AbsoluteObj)`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`

const ChildWrapper = styled(AbsoluteObj)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AspectImage = ({ src, aspect, children }) => {
  return (
    <Wrapper aspect={aspect}>
      {children ? <ChildWrapper>{children}</ChildWrapper> : <Image src={src} />}
    </Wrapper>
  )
}

AspectImage.defaultProps = {
  aspect: 2 / 3,
  children: null,
  src: null,
}

AspectImage.propTypes = {
  aspect: PropTypes.number,
  src: PropTypes.string,
  children: PropTypes.element,
}

export default AspectImage
