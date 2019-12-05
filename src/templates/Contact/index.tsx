import React, { useState, createContext, useContext } from 'react'
import PageIntro from 'components/PageIntro'
import Section from 'components/Section'
import { Wrap } from 'style'
import Form from './form'
import Heading from 'components/Heading'
import Cols from 'components/Cols'
import { social } from 'siteconfig'
import Styled from './Styled'

export interface PageState {
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export const ContactCtx = React.createContext<PageState>({
  setOpenState: () => false,
  isOpen: false,
})

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

const Contact: React.FC<{ hero }> = ({ hero }) => {
  const [isOpen, setOpenState] = useState<boolean>(false)

  return (
    <ContactCtx.Provider value={{ setOpenState, isOpen }}>
      <Wrap>
        <Section>
          <Heading headingStyle={0} as="h1" noMargin={true}>
            Interested in working together?
          </Heading>
          <Form />
          <Info />
        </Section>
      </Wrap>
    </ContactCtx.Provider>
  )
}

const EMAILS: { title: string; email: string }[] = [
  { title: 'Inquiries', email: 'info@hightidenyc.com' },
  { title: 'Careers', email: 'careers@hightidenyc.com' },
  { title: 'Press', email: 'press@hightidenyc.com' },
]

const Info: React.FC = () => {
  return (
    <Styled.Information>
      <Cols>
        <Section>
          <div>
            {EMAILS.map(({ title, email }) => (
              <Styled.InformationSection key={title}>
                <strong>{title}</strong>
                <a href={`mailto:${email}`}>{email}</a>
              </Styled.InformationSection>
            ))}
          </div>
        </Section>
        <Section>
          <Styled.InformationSection>
            <strong>Visit</strong>
            <p>
              28 Marcy Avenue, Floor 3<br />
              Brooklyn, NY 11211
            </p>
          </Styled.InformationSection>
          <Styled.InformationSection>
            <strong>Follow</strong>
            {SOCIAL_LINKS.map(({ name, url }) => (
              <a
                key={url}
                href={url}
                style={{ display: 'block' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ))}
          </Styled.InformationSection>
        </Section>
      </Cols>
    </Styled.Information>
  )
}
export default Contact
