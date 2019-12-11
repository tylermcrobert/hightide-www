import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'
import useCursor from './hooks/useCursor'
import { CursorType } from './types'

type CursorCtxProps = React.Dispatch<React.SetStateAction<CursorType>>

export const CursorCtx = createContext<CursorCtxProps>(() => null)

export const CursorProvider = ({ children }) => {
  const [currentCursor, setCursor] = useState<CursorType>(null)
  const ref = useCursor()

  return (
    <CursorCtx.Provider value={setCursor}>
      <Cursor ref={ref}>
        <CursorInner>{currentCursor}</CursorInner>
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

const CursorInner = styled.div`
  transform: translate3d(-50%, -50%, 0);
`