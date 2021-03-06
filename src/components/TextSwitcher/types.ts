import React from 'react'

export interface TextSwitcherCtxProps {
  currentIndex: number | null
  setCurrentIndex: React.Dispatch<React.SetStateAction<null | number>>
}

export interface ItemCtxProps {
  i: number
}

export interface TextSwitcherProps {
  cols?: number
}

export interface ItemProps {
  i: number
}

export interface ColSplitterProps {
  cols: number
}

export interface HeadProps {
  noExpand?: boolean
}

export interface TabsComposition {
  Body: React.FC
  Head: React.FC<HeadProps>
  item: React.FC<ItemProps>
}
