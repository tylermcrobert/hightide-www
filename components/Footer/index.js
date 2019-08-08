import React from 'react'
import Styled from './Styled'
import { Wrap, Section } from '../Styled'

function Footer() {
  return (
    <Styled.Footer>
      <Section>
        <Wrap>
          <h5>Visit</h5>
          <p>
            231 Front Street, Ste 209
            <br />
            Brooklyn, New York 11201
          </p>
          <p>© 2018 High Tide Creative</p>
        </Wrap>
      </Section>
    </Styled.Footer>
  )
}

// Footer.propTypes = {}

export default Footer
