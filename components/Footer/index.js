import React from 'react'
import { Wrap } from 'style'
import config, { social } from 'site.config'
import Styled from './Styled'
import Section from '../Section'

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
          </Section>
        </Styled.Grid>
      </Wrap>
    </Styled.Footer>
  )
}

// Footer.propTypes = {}

export default Footer
