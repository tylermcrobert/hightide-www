import React, { useState, createContext, useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'
import { BUDGET, INPUTS, PROJECT_TYPE, initialState } from './constants'
import toKebabCase from '../../util/toKebabCase'
import getGlobalValidity from './util/getGlobalValidity'
import getStructuredObj from './util/getStructuredObj'

const ContactCtx = createContext()

export default function Contact({ data }) {
  const { body } = data.contact.data
  const [state, setState] = useState(initialState)

  const canSubmit = getGlobalValidity(state)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(getStructuredObj(state))
  }

  return (
    <ContactCtx.Provider value={{ state, setState }}>
      <Wrap>
        <Section.Large>{RichText.render(body[0].items[0].hero)}</Section.Large>
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
          {canSubmit && <input type="submit" />}
        </form>
      </Wrap>
    </ContactCtx.Provider>
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
            {isErr && item.errMsg}
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
        {PROJECT_TYPE.map(item => (
          <div>
            <Styled.OptionInput
              onChange={e => handleChange(e, item.id)}
              type="checkbox"
              id={item.id}
              checked={state.projectTypes[item.id]}
            />
            <Styled.Label htmlFor={item.id}>{item.display}</Styled.Label>
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
      {BUDGET.map(item => (
        <div>
          <Styled.OptionInput
            type="radio"
            name="budget"
            onChange={() => handleChange(item)}
            id={toKebabCase(item)}
            checked={item === state.budget}
          />
          <Styled.Label htmlFor={toKebabCase(item)}>{item}</Styled.Label>
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
