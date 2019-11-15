import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'
import useCursor from './hooks/useCursor'

const CursorCtx = createContext()

export const CursorProvider = ({ children }) => {
  const [currentCursor, setCursor] = useState(null)
  const ref = useCursor()
  return (
    <CursorCtx.Provider value={setCursor}>
      <Cursor ref={ref}>
        <Cursor.Inner>{currentCursor}</Cursor.Inner>
      </Cursor>
      {children}
    </CursorCtx.Provider>
  )
}

export const useSetCursor = () => useContext(CursorCtx)

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  mix-blend-mode: difference;
`

Cursor.Inner = styled.div`
  transform: translate3d(-50%, -50%, 0);
`
