import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Box = ({ mb, ...props }) => {
  return <StyledBox {...props} mb={mb} />
}

Box.defaultProps = {
  mb: null,
}

Box.propTypes = {
  mb: PropTypes.number,
}

const StyledBox = styled.div`
  ${props =>
    typeof props.mb === 'number' &&
    css`
      margin-bottom: ${props.theme.fontSizes[props.mb]};
    `}
`

export default Box
