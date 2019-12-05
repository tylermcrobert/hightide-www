import React, { useState } from 'react'
import { FormState, FormEl } from './types'
import axios from 'axios'
import Router from 'next/router'
import { COMPANY_CODE, SYNOPSIS_CODE } from './constants'

const initialState: FormState = {
  email: null,
  firstName: null,
  lastName: null,
  company: null,
  synopsis: null,
  isValid: false,
  isReferral: null,
}

export interface FormMethods {
  handleChange: (e: React.SyntheticEvent, objectKey: FormEl) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  formState: FormState
}

const useForm = (): FormMethods => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleChange = (e, objectKey: FormEl) => {
    setFormState({ ...formState, [objectKey]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const structureObj = () => {
      const { firstName, lastName, email, company, synopsis } = formState
      return {
        name: `${firstName} ${lastName}`,
        email: email,
        [COMPANY_CODE]: company,
        [SYNOPSIS_CODE]: synopsis,
      }
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
