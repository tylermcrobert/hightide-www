import React, { useContext } from 'react'
import Button from 'components/Button'
import { TextArea, Input, Header } from 'components/FormElements'
import useExpand from 'hooks/useExpand'
import useForm from './useForm'
import { ContactCtx } from '.'
import { FormEl } from './types'
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

  return (
    <div>
      <Styled.Prompt isHidden={isOpen} onClick={() => setOpenState(true)}>
        Answer a Few Questions
      </Styled.Prompt>
      <div ref={formRef}>
        <form onSubmit={e => handleSubmit(e)}>
          <Header>
            Tell us about your project.
            <br />
            Please include estimated timeline, budget, goals, and if you were
            referred to us.
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
