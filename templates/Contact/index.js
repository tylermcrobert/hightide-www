import React, { useState, createContext, useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { motion } from 'framer-motion'
import { Wrap } from 'style'
import Section from 'components/Section'
import Error from 'next/error'
import PageIntro from 'components/PageIntro'
import toKebabCase from 'util/toKebabCase'
import axios from 'axios'
import Styled from './Styled'
import { BUDGET, INPUTS, PROJECT_TYPE, initialState } from './constants'
import getFormValidity from './util/getFormValidity'
import getStructuredObj from './util/getStructuredObj'

const ContactCtx = createContext()

const pipediveUrl = `${process.env.PIPEDRIVE_ENDPOINT}?api_token=${process.env.PIPEDRIVE_TOKEN}`

export default function Contact({ hero }) {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState(null)
  const canSubmit = getFormValidity(state)

  const handleSubmit = e => {
    if (canSubmit) {
      e.preventDefault()
      const formData = getStructuredObj(state)

      axios.post(pipediveUrl, formData).catch(err => {
        console.error(err)
        setError(err)
      })
    }
  }

  if (!error) {
    return (
      <ContactCtx.Provider value={{ state, setState }}>
        <Wrap>
          <PageIntro>{RichText.render(hero)}</PageIntro>
          <form onSubmit={handleSubmit}>
            <Section>
              <Information />
            </Section>
            <Section>
              <Styled.DetailsWrapper>
                <ProjectType />
                <Budget />
              </Styled.DetailsWrapper>
            </Section>
            <Section>
              <Synopsis />
            </Section>
            <Section>
              <Styled.SubmitWrapper>
                <Styled.Submit
                  type="submit"
                  value="Send It"
                  active={canSubmit}
                />
              </Styled.SubmitWrapper>
            </Section>
          </form>
        </Wrap>
      </ContactCtx.Provider>
    )
  }
  return <Error />
}

function Warning({ active, children }) {
  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.2 }}
      animate={{
        height: active ? 'auto' : '0',
        opacity: active ? 1 : 0,
        y: active ? '0%' : '-50%',
      }}
    >
      <Styled.ValidationWarning>{children}</Styled.ValidationWarning>
    </motion.div>
  )
}

function Information() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = (e, id, validator) => {
    const { value } = e.target
    setState({
      ...state,
      [id]: { ...state[id], value, valid: validator(value) },
    })
  }

  const handleBlur = id => {
    setState({ ...state, [id]: { ...state[id], blurred: true } })
  }

  return (
    <Styled.Cols>
      {INPUTS.map(item => {
        const isErr =
          state[item.id].blurred && item.required && !state[item.id].valid
        return (
          <div key={item.id}>
            <Styled.TextInput
              type="text"
              onChange={e => handleChange(e, item.id, item.validator)}
              value={state[item.id].value}
              placeholder={`${item.placeholder}${item.required ? '*' : ''}`}
              onBlur={() => handleBlur(item.id)}
            />
            <Warning active={isErr}>{item.errMsg}</Warning>
          </div>
        )
      })}
    </Styled.Cols>
  )
}

function ProjectType() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = (e, id) => {
    setState({
      ...state,
      projectTypes: { ...state.projectTypes, [id]: e.target.checked },
    })
  }

  return (
    <div>
      <Styled.Title>Type Of Project</Styled.Title>
      <Styled.ProjTypeWrapper>
        {PROJECT_TYPE.map(projType => (
          <div key={projType.id}>
            <Styled.OptionInput
              onChange={e => handleChange(e, projType.id)}
              type="checkbox"
              id={projType.id}
              checked={state.projectTypes[projType.id]}
            />
            <Styled.Label htmlFor={projType.id}>
              {projType.display}
            </Styled.Label>
          </div>
        ))}
      </Styled.ProjTypeWrapper>
    </div>
  )
}

function Budget() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = item => {
    setState({ ...state, budget: item })
  }

  return (
    <div>
      <Styled.Title>Budget</Styled.Title>
      {BUDGET.map(budgetVal => (
        <div key={budgetVal}>
          <Styled.OptionInput
            type="radio"
            name="budget"
            onChange={() => handleChange(budgetVal)}
            id={toKebabCase(budgetVal)}
            checked={budgetVal === state.budget}
          />
          <Styled.Label htmlFor={toKebabCase(budgetVal)}>
            {budgetVal}
          </Styled.Label>
        </div>
      ))}
    </div>
  )
}

function Synopsis() {
  const [wordCount, setWordCount] = useState(0)
  const { state, setState } = useContext(ContactCtx)

  const handleChange = e => {
    const { value } = e.target
    setWordCount(value.length)
    setState({ ...state, synopsis: { value, valid: value.length >= 100 } })
  }

  return (
    <div>
      <Styled.Title>Project Synopsis</Styled.Title>
      <Styled.TextArea
        onChange={handleChange}
        rows="5"
        placeholder="Describe your project..."
      />
      {wordCount} / 100 Required
    </div>
  )
}

// About.propTypes = {}
