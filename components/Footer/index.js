import React, { useState } from 'react'
import { validate } from 'email-validator'
import Styled from './Styled'
import { Wrap, Section } from '../../style'

function Footer() {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  function handleChange(e) {
    const { value } = e.target
    setEmail(value)
    setValid(validate(value))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (valid) {
      setError(null)
      setSuccess(': )')
      console.log(`${email} is valid`)
    } else {
      setError(': (')
      setSuccess(null)
    }

    console.log(valid)
  }
  return (
    <Styled.Footer>
      <Wrap>
        <Styled.Grid>
          <Section>
            <h5>Visit</h5>
            <p>
              231 Front Street, Ste 209
              <br />
              Brooklyn, New York 11201
            </p>
            <p>© 2018 High Tide Creative</p>
          </Section>
          <Section>
            <h5>Inquiries</h5>
            <a href="mailto:info@hightidenyc.com">info@hightidenyc.com</a>
          </Section>
          <Section>
            <h5>Follow</h5>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Tumblr</a>
            <form onSubmit={handleSubmit}>
              <Styled.StayUpdated
                onChange={handleChange}
                placeholder="Stay Updated"
              />
            </form>
            {error && error}
            {success && success}
          </Section>
        </Styled.Grid>
      </Wrap>
    </Styled.Footer>
  )
}

// Footer.propTypes = {}

export default Footer
