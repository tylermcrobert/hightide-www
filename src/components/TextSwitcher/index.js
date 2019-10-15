import React, { useState, useContext, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import splitArr from 'util/splitArr'
import Styled from './Styled'

const TextSwitcherCtx = createContext()
const ItemCtx = createContext()

function TextSwitcher({ cols, children }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  return (
    <TextSwitcherCtx.Provider value={{ currentIndex, setCurrentIndex }}>
      <ColWrapper cols={cols}>{children}</ColWrapper>
    </TextSwitcherCtx.Provider>
  )
}

const Body = ({ children }) => {
  const { currentIndex } = useContext(TextSwitcherCtx)
  const { i } = useContext(ItemCtx)
  return (
    <motion.div
      initial={false}
      style={{ overflow: 'hidden' }}
      transition={{ ease: 'easeOut', duration: 0.25 }}
      animate={{
        height: i === currentIndex ? 'auto' : '0',
      }}
    >
      <Styled.Body>
        <p>{children}</p>
      </Styled.Body>
    </motion.div>
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
