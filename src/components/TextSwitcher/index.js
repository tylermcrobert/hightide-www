import React, { useState } from 'react'
import Styled from './Styled'

function divideArray(array) {
  const midpoint = Math.ceil(array.length / 2)
  var first = array.slice(0, midpoint)
  var second = array.slice(midpoint)
  return [first, second]
}

const COLS = true

function TextSwitcher({ data }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  function handleTitle(i) {
    setCurrentIndex(currentIndex !== i ? i : null)
  }

  const cols = COLS ? divideArray(data) : [data]

  return (
    <Styled.Wrapper cols={COLS}>
      {cols.map((col, colIndex) => (
        <Styled.ColWrapper key={colIndex}>
          {col.map((item, i) => (
            <Styled.Item key={i} onClick={() => handleTitle(`${colIndex}${i}`)}>
              <h2>{item.heading}</h2>
              <p>{`${colIndex}${i}` === currentIndex && item.body}</p>
            </Styled.Item>
          ))}
        </Styled.ColWrapper>
      ))}
    </Styled.Wrapper>
  )
}

export default TextSwitcher
