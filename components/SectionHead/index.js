import React from 'react'
import Styled from './Styled'
import Arrow from '../Arrow'

function Header({ children, link }) {
  return (
    <Styled.Header>
      <h5>{children}</h5>
      {link && (
        <h5>
          {link}
          <Arrow />
        </h5>
      )}
    </Styled.Header>
  )
}

export default Header
