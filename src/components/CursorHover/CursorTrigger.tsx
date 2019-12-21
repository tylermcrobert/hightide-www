/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import styled from 'styled-components'
import { useEffect, useState } from 'react'
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
  const { setCursor, currentCursor } = useSetCursor()

  const handleEnter = () => setCursor(cursor)
  const handleLeave = () => setCursor(null)

  // if cursor is triggered by lin
  Router.events.on('routeChangeComplete', handleLeave)

  // useEffect(() => {
  //   document.addEventListener('scroll', handleLeave)

  //   return () => {
  //     document.removeEventListener('scroll', handleLeave)
  //   }
  // }, [])

  return (
    <Trigger
      cursorVisible={!currentCursor}
      onMouseOver={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Trigger>
  )
}

const Trigger = styled.div<{ cursorVisible: boolean }>`
  cursor: ${props => (props.cursorVisible ? 'inherit' : 'none')};
`

export default CursorTrigger
