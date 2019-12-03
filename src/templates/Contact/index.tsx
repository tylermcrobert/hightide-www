import React, { useState, createContext, useContext } from 'react'
import PageIntro from 'components/PageIntro'
import Section from 'components/Section'
import { Wrap } from 'style'
import { PageState } from './types'
import useForm from './useForm'

const ContactCtx = React.createContext<PageState>({
  setOpenState: () => false,
  isOpen: false,
})

const Contact: React.FC<{ hero }> = ({ hero }) => {
  const [isOpen, setOpenState] = useState<boolean>(false)

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

const Form: React.FC = () => {
  const { setOpenState, isOpen } = useContext(ContactCtx)
  const { handleSubmit, handleChange } = useForm()

  return (
    <Section>
      {isOpen && (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <div>
              Were you referred to us?
              <div>(Yes) (No)</div>
            </div>
            Tell us a little bit about your project?
            <div>
              <textarea onChange={e => handleChange(e, 'synopsis')}></textarea>
            </div>
            {[
              { key: 'firstName', label: 'Last Name' },
              { key: 'lastName', label: 'Last Name' },
              { key: 'email', label: 'Email' },
              { key: 'company', label: 'Company' },
            ].map(({ key, label }) => (
              <div key={key}>
                <input
                  onChange={e => handleChange(e, key)}
                  placeholder={`${label}*`}
                />
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
          <div onClick={() => setOpenState(false)}>Close</div>
        </div>
      )}
    </Section>
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
