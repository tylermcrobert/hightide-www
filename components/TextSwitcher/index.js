import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Styled from './Styled'
import splitArr from '../../util/splitArr'

function TextSwitcher({ data, cols }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  return (
    <ColWrapper cols={cols}>
      {data.map((item, i) => (
        <Styled.Item
          key={item.heading}
          onClick={() => setCurrentIndex(currentIndex !== i ? i : null)}
        >
          <Styled.Head>{item.heading}</Styled.Head>
          <motion.div
            initial={false}
            style={{ overflow: 'hidden' }}
            transition={{ ease: 'easeOut', duration: 0.25 }}
            animate={{
              height: i === currentIndex ? 'auto' : '0',
            }}
          >
            <p>{item.body}</p>
          </motion.div>
        </Styled.Item>
      ))}
    </ColWrapper>
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

export default TextSwitcher
