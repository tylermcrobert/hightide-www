import React, { useContext } from 'react'
import Button from 'components/Button'
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
  const { handleSubmit, handleChange, formState } = useForm()
  const formRef = useExpand(isOpen, 0.5)
  const referralRef = useExpand(formState.isReferral === 'Yes')

  return (
    <div>
      <Styled.Prompt isHidden={isOpen} onClick={() => setOpenState(true)}>
        Answer a Few Questions
      </Styled.Prompt>
      <div ref={formRef}>
        <form onSubmit={e => handleSubmit(e)}>
          <Header>Were you referred to us?</Header>

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

          <div ref={referralRef}>
            <Header>Who were you referred by?</Header>
            <Input placeholder="Name" style={{ marginTop: 0 }} />
          </div>

          <Header>
            Tell us about your project. Please include estimated timeline,
            budget, and goals.
          </Header>

          <TextArea rows={5} onChange={e => handleChange(e, 'synopsis')} />

          {formEls.map(({ key, label }) => (
            <div key={key}>
              <Input
                onChange={e => handleChange(e, key)}
                placeholder={`${label}*`}
              />
            </div>
          ))}

          <Styled.SubmitWrapper>
            <Styled.Link onClick={() => setOpenState(false)}>Close</Styled.Link>
            <div>
              <Button type="submit" disabled={!formState.isValid}>
                Submit
              </Button>
            </div>
          </Styled.SubmitWrapper>
        </form>
      </div>
    </div>
  )
}

export default Form
