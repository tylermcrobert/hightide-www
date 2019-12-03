import React, { useContext } from 'react'
import Section from 'components/Section'
import useForm from './useForm'
import { ContactCtx } from '.'
import { TextArea, Input, Header, Radio } from 'components/FormElements'

const Form: React.FC = () => {
  const { setOpenState, isOpen } = useContext(ContactCtx)
  const { handleSubmit, handleChange } = useForm()

  return (
    <Section>
      {isOpen && (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <div>
              <Header>Were you referred to us?</Header>
              <div>
                <Radio type="radio" name="gender" value="Yes" />
                <Radio type="radio" name="gender" value="No" />
              </div>
            </div>
            <Header>Tell us a little bit about your project?</Header>
            <div>
              <TextArea
                rows={5}
                onChange={e => handleChange(e, 'synopsis')}
              ></TextArea>
            </div>
            {[
              { key: 'firstName', label: 'Last Name' },
              { key: 'lastName', label: 'Last Name' },
              { key: 'email', label: 'Email' },
              { key: 'company', label: 'Company' },
            ].map(({ key, label }) => (
              <div key={key}>
                <Input
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

export default Form
