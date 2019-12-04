import React, { useContext } from 'react'
import Section from 'components/Section'
import useForm from './useForm'
import { ContactCtx } from '.'
import { TextArea, Input, Header, Radio } from 'components/FormElements'
import { FormEl } from './types'
import useExpand from 'hooks/useExpand'
import Styled from './Styled'

const formEls: { key: FormEl; label: string }[] = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'company', label: 'Company' },
]

const Form: React.FC = () => {
  const { setOpenState, isOpen } = useContext(ContactCtx)
  const { handleSubmit, handleChange } = useForm()
  const ref = useExpand(isOpen, 0.5)

  return (
    <div>
      <Styled.Prompt isHidden={isOpen} onClick={() => setOpenState(true)}>
        Answer a Few Questions
      </Styled.Prompt>

      <div ref={ref}>
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <Header>Were you referred to us?</Header>
            <div>
              <Radio
                type="radio"
                name="referral"
                value="Yes"
                onChange={e => handleChange(e, 'isReferral')}
              />
              <Radio
                type="radio"
                name="referral"
                value="No"
                onChange={e => handleChange(e, 'isReferral')}
              />
            </div>
          </div>
          <Header>Tell us a little bit about your project?</Header>
          <div>
            <TextArea
              rows={5}
              onChange={e => handleChange(e, 'synopsis')}
            ></TextArea>
          </div>
          {formEls.map(({ key, label }) => (
            <div key={key}>
              <Input
                onChange={e => handleChange(e, key)}
                placeholder={`${label}*`}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
        <Styled.Close onClick={() => setOpenState(false)}>Close</Styled.Close>
      </div>
    </div>
  )
}

export default Form
