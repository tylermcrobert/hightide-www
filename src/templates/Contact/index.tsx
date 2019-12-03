import React, { useState, createContext, useContext } from 'react'
import PageIntro from 'components/PageIntro'
import Section from 'components/Section'
import { Wrap } from 'style'
import { PageState } from './types'
import Form from './form'

export const ContactCtx = React.createContext<PageState>({
  setOpenState: () => false,
  isOpen: false,
})

const Contact: React.FC<{ hero }> = ({ hero }) => {
  const [isOpen, setOpenState] = useState<boolean>(true)

  return (
    <ContactCtx.Provider value={{ setOpenState, isOpen }}>
      <Wrap>
        <PageIntro>
          <h1>Interested in working together?</h1>
          <div onClick={() => setOpenState(true)}>Answer a few questions</div>
        </PageIntro>
        <Form />
        <Info />
      </Wrap>
    </ContactCtx.Provider>
  )
}

const EMAILS: { title: string; email: string }[] = [
  { title: 'Inquiries', email: 'infoahightidenyc.com' },
  { title: 'Careers', email: 'careersahightidenyc.com' },
  { title: 'Press', email: 'pressahightidenyc.com' },
]

const Info: React.FC = () => {
  return (
    <Section>
      <div>
        {EMAILS.map(({ title, email }) => (
          <div key={title}>
            <div>{title}</div>
            <div>{email}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
export default Contact
// About.propTypes = {}
