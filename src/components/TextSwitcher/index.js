import React, { useState, useContext, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import splitArr from 'util/splitArr'
import Styled from './Styled'

import useExpand from './hooks/useExpand'

export const TextSwitcherCtx = createContext()
export const ItemCtx = createContext()

function TextSwitcher({ cols, children }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  return (
    <TextSwitcherCtx.Provider value={{ currentIndex, setCurrentIndex }}>
      <ColWrapper cols={cols}>{children}</ColWrapper>
    </TextSwitcherCtx.Provider>
  )
}

const Body = ({ children }) => {
  const bodyRef = useExpand()
  return (
    <Styled.Body ref={bodyRef}>
      <p>{children}</p>
    </Styled.Body>
  )
}

function Item({ children, i }) {
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

function Head({ children }) {
  return (
    <Styled.HeadWrapper>
      <Styled.Head>{children}</Styled.Head>
      <Styled.CloseMarker>&#65291;</Styled.CloseMarker>
    </Styled.HeadWrapper>
  )
}

const ColWrapper = ({ children, cols }) => {
  const split = splitArr(children, cols)
  return (
    <Styled.Wrapper cols={cols}>
      {split.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Styled.Wrapper>
  )
}

TextSwitcher.Body = Body
TextSwitcher.Head = Head
TextSwitcher.item = Item
Item.propTypes = {
  i: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
}
export default TextSwitcher
