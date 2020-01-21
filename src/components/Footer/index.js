import React from 'react'
import { Wrap } from 'style'
import config, { social } from 'siteconfig'
import { Opacity } from 'components/LinkEffect'
import Styled from './Styled'
import Section from '../Section'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: `https://www.instagram.com/${social.instagram}`,
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
              28 Marcy Avenue, Floor 3
              <br />
              Brooklyn, New York 11211
            </p>
            <p>
              © {new Date().getFullYear()} {config.legalTitle}
            </p>
          </Section>
          <Section>
            <h5>Inquiries</h5>
            <Opacity invert>
              <a href="mailto:info@hightidenyc.com">info@hightidenyc.com</a>
            </Opacity>
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
                <Opacity invert>{item.name}</Opacity>
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
