import React, { useState } from 'react'
import { FormMethods, FormState, FormEl } from './types'

// dynamically create?
const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  synopsis: '',
  isValid: false,
  isReferral: '',
}

const useForm = (): FormMethods => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleChange = (e, objectKey: FormEl) => {
    setFormState({ ...formState, [objectKey]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  React.useEffect(() => {
    console.log(formState)
  }, [formState])

  return { handleChange, handleSubmit }
}

export default useForm
