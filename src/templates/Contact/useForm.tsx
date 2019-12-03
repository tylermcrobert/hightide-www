import React, { useState } from 'react'
import { FormState, FormMethods } from './types'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  synopsis: '',
  isValid: false,
  isReferral: false,
}

const useForm = (): FormMethods => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleChange = (e, objectKey: string) => {
    setFormState({ ...formState, [objectKey]: e.target.value })

    console.log(formState)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  return { handleChange, handleSubmit }
}

export default useForm
