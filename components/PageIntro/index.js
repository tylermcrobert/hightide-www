import PropTypes from 'prop-types'
import Styled from './Styled'

export default function PageIntro({ children }) {
  if (children) {
    return <Styled.Intro>{children}</Styled.Intro>
  }
  return null
}

PageIntro.propTypes = {
  children: PropTypes.any.isRequired,
}
