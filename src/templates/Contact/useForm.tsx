import React, { useState } from 'react'

export interface FormState {
  email: string
  firstName: string
  lastName: string
  company: string
  synopsis: string
  isReferral: boolean
  isValid: boolean
}

export interface FormMethods {
  handleChange: (e: any, objectKey: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

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
