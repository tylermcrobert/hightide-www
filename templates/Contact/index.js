import React, { useState, createContext, useContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'
import { BUDGET, INPUTS, PROJECT_TYPE, initialState } from './constants'
import toKebabCase from '../../util/toKebabCase'
// import PropTypes from 'prop-types'

const ContactCtx = createContext()

export default function Contact({ data }) {
  const { body } = data.contact.data
  const [state, setState] = useState(initialState)
  console.log(state)
  return (
    <ContactCtx.Provider value={{ state, setState }}>
      <Wrap>
        <Section.Large>{RichText.render(body[0].items[0].hero)}</Section.Large>
        <form>
          <Section>
            <Information />
          </Section>
          <Section>
            <ProjectDetails />
          </Section>
          <Section>
            <Styled.Title>Project Synopsis</Styled.Title>
            <Styled.TextArea rows="5" placeholder="Describe your project..." />x
            / 100 Required
          </Section>
        </form>
      </Wrap>
    </ContactCtx.Provider>
  )
}

function Information() {
  const { state, setState } = useContext(ContactCtx)
  const handleChange = (e, id) => {
    const { value } = e.target
    setState({ ...state, [id]: { ...state[id], value } })
  }
  return (
    <Styled.Cols>
      {INPUTS.map(item => (
        <div>
          <Styled.TextInput
            type="text"
            onChange={e => handleChange(e, item.id)}
            value={state[item.id].value}
            placeholder={`${item.placeholder}${item.required ? '*' : ''}`}
          />
        </div>
      ))}
    </Styled.Cols>
  )
}

function ProjectDetails() {
  return (
    <Styled.DetailsWrapper>
      <div>
        <ProjectType />
      </div>
      <div>
        <Budget />
      </div>
    </Styled.DetailsWrapper>
  )
}

function ProjectType() {
  return (
    <>
      <Styled.Title>Type Of Project</Styled.Title>
      <Styled.ProjTypeWrapper>
        {PROJECT_TYPE.map(item => (
          <div>
            <Styled.OptionInput type="checkbox" id={item.id} />
            <Styled.Label htmlFor={item.id}>{item.display}</Styled.Label>
          </div>
        ))}
      </Styled.ProjTypeWrapper>
    </>
  )
}

function Budget() {
  return (
    <>
      <Styled.Title>Budget</Styled.Title>

      {BUDGET.map(item => (
        <div>
          <Styled.OptionInput
            type="radio"
            name="budget"
            id={toKebabCase(item)}
          />
          <Styled.Label htmlFor={toKebabCase(item)}>{item}</Styled.Label>
        </div>
      ))}
    </>
  )
}

// About.propTypes = {}
