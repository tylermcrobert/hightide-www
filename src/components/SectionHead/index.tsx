import React from 'react'
import Styled from './Styled'
import Arrow from '../Arrow'

interface Props {
  children: string
  link?: React.ReactElement
  line?: boolean
  noArrow?: boolean
}

const Header: React.FC<Props> = ({ children, link, line, noArrow }: Props) => {
  return (
    <Styled.Header line={line}>
      <h5>{children}</h5>
      {link && (
        <h5>
          <Styled.HoverTransform>
            {link}
            <Styled.HoverTarget>{!noArrow && <Arrow />}</Styled.HoverTarget>
          </Styled.HoverTransform>
        </h5>
      )}
    </Styled.Header>
  )
}

export default Header
