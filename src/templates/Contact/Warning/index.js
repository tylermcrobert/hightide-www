import useExpand from 'hooks/useExpand'
import Styled from './Styled'

export default function Warning({ active, children }) {
  const ref = useExpand(active)

  return (
    <Styled.ValidationWarning ref={ref}>{children}</Styled.ValidationWarning>
  )
}
