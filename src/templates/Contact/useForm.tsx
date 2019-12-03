import React, { useState } from 'react'
import { FormState, FormEl } from './types'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  synopsis: '',
  isValid: false,
  isReferral: '',
}

export interface FormMethods {
  handleChange: (e: any, objectKey: FormEl) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
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
