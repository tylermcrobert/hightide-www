/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
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
  // to narrow down multiple DOM elements
  const isActiveTrigger = useRef(false)
  const DOMRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleEnter = () => {
    isActiveTrigger.current = true
    setCursor(cursor)
  }

  const handleLeave = () => {
    isActiveTrigger.current = false
    setCursor(null)
  }

  const handleMouse = e => {
    // record mouse position
    if (isActiveTrigger.current) {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handleScroll = () => {
    // if is current active trigger
    if (isActiveTrigger.current && DOMRef.current) {
      const b = DOMRef.current.getBoundingClientRect()

      const isAbove = b.top > mousePos.current.y
      const isBelow = b.bottom < mousePos.current.y
      const isLeftOfEl = b.left > mousePos.current.x
      const isRightofEl = b.right < mousePos.current.x
      const isOutsideTrigger = isAbove || isBelow || isLeftOfEl || isRightofEl

      if (isOutsideTrigger) {
        handleLeave()
      }
    }
  }

  // if cursor is triggered by lin
  Router.events.on('routeChangeComplete', handleLeave)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', handleMouse)

    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.addEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <Trigger
      ref={DOMRef}
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
