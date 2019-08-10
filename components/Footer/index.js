import React, { useState } from 'react'
import { validate } from 'email-validator'
import Styled from './Styled'
import { Wrap, Section } from '../../style'
import config, { social } from '../../site.config'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: `https://www.instagram.com/${social.instagram}`,
  },
  {
    name: 'Facebook',
    url: `https://www.facebook.com/${social.facebook}`,
  },
  {
    name: 'Twitter',
    url: `https://www.twitter.com/${social.twitter}`,
  },
  {
    name: 'Tumblr',
    url: `https://${social.tumblr}.tumblr.com/`,
  },
]

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
            <p>
              © {new Date().getFullYear()} {config.legalTitle}
            </p>
          </Section>
          <Section>
            <h5>Inquiries</h5>
            <a href="mailto:info@hightidenyc.com">info@hightidenyc.com</a>
          </Section>
          <Section>
            <h5>Follow</h5>
            {SOCIAL_LINKS.map(item => (
              <a
                href={item.url}
                key={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
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
