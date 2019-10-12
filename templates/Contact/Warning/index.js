import { motion } from 'framer-motion'
import Styled from './Styled'

export default function Warning({ active, children }) {
  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.2 }}
      animate={{
        height: active ? 'auto' : '0',
        opacity: active ? 1 : 0,
        y: active ? '0%' : '-50%',
      }}
    >
      <Styled.ValidationWarning>{children}</Styled.ValidationWarning>
    </motion.div>
  )
}
