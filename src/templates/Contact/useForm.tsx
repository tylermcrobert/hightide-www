import React, { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { FormState, FormEl } from './types'

export type FormReturn = {
  name
  email
  company
  synopsis
}

const initialState: FormState = {
  email: null,
  firstName: null,
  lastName: null,
  company: null,
  synopsis: null,
  isValid: false,
}

export interface FormMethods {
  handleChange: (e: React.SyntheticEvent, objectKey: FormEl) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  formState: FormState
}

const useForm = (): FormMethods => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleChange = (e, objectKey: FormEl) => {
    const validate = (updatedState: FormState): boolean => {
      const { email, firstName, lastName, company, synopsis } = updatedState
      return !!(email && firstName && lastName && company && synopsis)
    }

    const updatedState = { ...formState, [objectKey]: e.target.value }
    const isValid = validate(updatedState)
    setFormState({ ...updatedState, isValid })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const structureObj = () => {
      const { firstName, lastName, email, company, synopsis } = formState

      const formReturn: FormReturn = {
        name: `${firstName} ${lastName}`,
        email,
        company,
        synopsis,
      }

      return formReturn
    }

    const handleSuccess = () => {
      Router.push({
        pathname: '/submit',
      })
    }

    const postForm = () => {
      const postObject = structureObj()

      axios
        .post('/api/submitForm', postObject)
        .then(() => handleSuccess())
        .catch(err => console.error('err', err))
    }

    postForm()
  }

  return { handleChange, handleSubmit, formState }
}

export default useForm
