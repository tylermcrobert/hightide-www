import React, {
  useState,
  useContext,
  createContext,
  SetStateAction,
} from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes, { number } from 'prop-types'
import splitArr from 'util/splitArr'
import useExpand from 'hooks/useExpand'
import Styled from './Styled'

// types

interface TextSwitcherCtxProps {
  currentIndex: number | null
  setCurrentIndex: React.Dispatch<SetStateAction<null | number>>
}

interface ItemCtxProps {
  i: number
}

interface TextSwitcherProps {
  cols?: number
}

interface ItemProps {
  i: number
}

interface ColWrapperProps {
  cols: number
}

interface TabsComposition {
  Body: React.FC
  Head: React.FC
  item: React.FC<ItemProps>
}

// context setup

export const TextSwitcherCtx = createContext<TextSwitcherCtxProps>({
  currentIndex: null,
  setCurrentIndex: () => null,
})

export const ItemCtx = createContext<ItemCtxProps>({ i: 0 })

const TextSwitcher: React.FC<TextSwitcherProps> & TabsComposition = ({
  cols = 2,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  return (
    <TextSwitcherCtx.Provider value={{ currentIndex, setCurrentIndex }}>
      <ColWrapper cols={cols}>{children}</ColWrapper>
    </TextSwitcherCtx.Provider>
  )
}

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

const Head: React.FC = ({ children }) => {
  return (
    <Styled.HeadWrapper>
      <Styled.Head>{children}</Styled.Head>
      <Styled.CloseMarker>&#65291;</Styled.CloseMarker>
    </Styled.HeadWrapper>
  )
}

const ColWrapper: React.FC<ColWrapperProps> = ({ children, cols }) => {
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

export default TextSwitcher
