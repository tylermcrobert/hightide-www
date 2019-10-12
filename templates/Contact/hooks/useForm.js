import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { initialState } from '../constants'
import getFormValidity from '../util/getFormValidity'
import getStructuredObj from '../util/getStructuredObj'

const pipediveUrl = `${process.env.PIPEDRIVE_ENDPOINT}?api_token=${process.env.PIPEDRIVE_TOKEN}`

export default function useForm() {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState(null)
  const canSubmit = getFormValidity(state)

  const handleSubmit = e => {
    if (canSubmit) {
      e.preventDefault()
      const formData = getStructuredObj(state)

      axios
        .post(pipediveUrl, formData)
        .then(() => {
          Router.push({
            pathname: '/submit',
          })
        })
        .catch(err => {
          console.error(err)
          setError(err)
        })
    }
  }

  return { error, state, setState, handleSubmit, canSubmit }
}
