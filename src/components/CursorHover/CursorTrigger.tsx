import styled from 'styled-components'

import Router from 'next/router'
import { useSetCursor } from './index'
import { CursorType } from './types'

interface Props {
  cursor: CursorType
}

export const CursorTrigger: React.FC<Props> = ({
  children,
  cursor,
  ...props
}) => {
  const setCursor = useSetCursor()

  const handleEnter = () => setCursor(cursor)
  const handleLeave = () => setCursor(null)

  // if cursor is triggered by link
  Router.events.on('routeChangeComplete', handleLeave)

  return (
    <Trigger onMouseEnter={handleEnter} onMouseLeave={handleLeave} {...props}>
      {children}
    </Trigger>
  )
}

const Trigger = styled.div`
  cursor: none;
`

export default CursorTrigger
