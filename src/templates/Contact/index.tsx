import React, { useState, createContext, useContext } from 'react'
import PageIntro from 'components/PageIntro'
import Section from 'components/Section'
import { Wrap } from 'style'
import Form from './form'
import Heading from 'components/Heading'

export interface PageState {
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export const ContactCtx = React.createContext<PageState>({
  setOpenState: () => false,
  isOpen: false,
})

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
    <Section>
      <div>
        {EMAILS.map(({ title, email }) => (
          <div key={title}>
            <strong>{title}</strong>
            <div>{email}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
export default Contact
