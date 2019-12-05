import React, { useState, useContext, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import splitArr from 'util/splitArr'
import useExpand from 'hooks/useExpand'
import Styled from './Styled'
import {
  TextSwitcherCtxProps,
  ItemCtxProps,
  TextSwitcherProps,
  ItemProps,
  ColSplitterProps,
  TabsComposition,
  HeadProps,
} from './types'

/**
 * TextSwitcher wrapper
 */
export const TextSwitcherCtx = createContext<TextSwitcherCtxProps>({
  currentIndex: null,
  setCurrentIndex: () => null,
})

const TextSwitcher: React.FC<TextSwitcherProps> & TabsComposition = ({
  cols = 2,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <TextSwitcherCtx.Provider value={{ currentIndex, setCurrentIndex }}>
      <ColSplitter cols={cols}>{children}</ColSplitter>
    </TextSwitcherCtx.Provider>
  )
}

const ColSplitter: React.FC<ColSplitterProps> = ({ children, cols }) => {
  const split = splitArr(children, cols)
  return (
    <Styled.Wrapper cols={cols}>
      {split.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Styled.Wrapper>
  )
}

/**
 * Wrapper for entire item
 */

export const ItemCtx = createContext<ItemCtxProps>({ i: 0 })

const Item: React.FC<ItemProps> = ({ children, i }) => {
  const { currentIndex, setCurrentIndex } = useContext(TextSwitcherCtx)

  return (
    <ThemeProvider theme={{ active: currentIndex === i }}>
      <ItemCtx.Provider value={{ i }}>
        <Styled.Item
          onClick={() => setCurrentIndex(currentIndex !== i ? i : null)}
        >
          {children}
        </Styled.Item>
      </ItemCtx.Provider>
    </ThemeProvider>
  )
}

/**
 * Wrapper for title
 */

const Head: React.FC<HeadProps> = ({ children, noExpand = false }) => {
  return (
    <Styled.HeadWrapper>
      <Styled.Head>{children}</Styled.Head>
      {!noExpand && <Styled.CloseMarker>&#65291;</Styled.CloseMarker>}
    </Styled.HeadWrapper>
  )
}

/**
 * Wrapper for description
 */

const Body: React.FC = ({ children }) => {
  const { currentIndex } = useContext(TextSwitcherCtx)
  const { i } = useContext(ItemCtx)
  const bodyRef = useExpand(currentIndex === i)

  return (
    <Styled.Body ref={bodyRef}>
      <p>{children}</p>
    </Styled.Body>
  )
}

TextSwitcher.Body = Body
TextSwitcher.Head = Head
TextSwitcher.item = Item

export default TextSwitcher
