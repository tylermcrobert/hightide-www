import styled from 'styled-components'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { useSetCursor } from './index'

export const CursorTrigger = ({ children, cursor, ...props }) => {
  const setCursor = useSetCursor()

  const handleEnter = () => setCursor(cursor)
  const handleLeave = () => setCursor(null)

  // if cursor is triggered by link
  Router.events.on('routeChangeComplete', handleLeave)

  return (
    <Trigger {...props} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </Trigger>
  )
}

const Trigger = styled.div`
  cursor: none;
`

CursorTrigger.propTypes = {
  cursor: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}
export default CursorTrigger
