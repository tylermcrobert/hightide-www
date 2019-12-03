import React, { useState, createContext, useContext } from 'react'
import PageIntro from 'components/PageIntro'
import Section from 'components/Section'
import { Wrap } from 'style'
import siteConfig from 'siteconfig'
import { FormState, Context } from './types'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  synopsis: '',
  isValid: false,
}

const ContactCtx = React.createContext<Context>({
  handleChange: () => null,
  handleSubmit: () => null,
  setOpenState: () => false,
  isOpen: false,
})

const Contact: React.FC<{ hero }> = ({ hero }) => {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [isOpen, setOpenState] = useState<boolean>(false)

  const handleChange = (e, objectKey: string) => {
    setFormState({ ...formState, [objectKey]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <ContactCtx.Provider
      value={{ handleChange, handleSubmit, setOpenState, isOpen }}
    >
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
  const {
    //
    handleSubmit,
    handleChange,
    setOpenState,
    isOpen,
  } = useContext(ContactCtx)

  return (
    <Section>
      {isOpen && (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
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
