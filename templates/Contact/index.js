import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'
// import PropTypes from 'prop-types'

const BUDGET = ['Above 100k', '75–100k', '50–75k', '25-50k', 'Below 25k']
const toKebabCase = string => {
  return string.replace(/\s+/g, '-').toLowerCase()
}

export default function Contact({ data }) {
  const { hero_text: hero, body } = data.contact.data
  return (
    <>
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
    </>
  )
}

function Information() {
  return (
    <Styled.Cols>
      {INPUTS.map(item => (
        <div>
          <Styled.TextInput
            type="text"
            placeholder={`${item.placeholder}${item.required ? '*' : ''}`}
          />
        </div>
      ))}
    </Styled.Cols>
  )
}

const INPUTS = [
  { placeholder: 'Name', required: true },
  { placeholder: 'Email Address', required: true },
  { placeholder: 'Location', required: false },
  { placeholder: 'Phone Number', required: true },
  { placeholder: 'Company Name', required: false },
  { placeholder: 'Website', required: false },
]

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

const PROJECT_TYPE = [
  'Branding',
  'Strategy',
  'Website',
  'Art Direction',
  'Packaging',
  'Editorial',
  'Campaign',
  'Environmental',
  'Copywriting',
  'Naming',
]

function ProjectType() {
  return (
    <>
      <Styled.Title>Type Of Project</Styled.Title>
      <Styled.ProjTypeWrapper>
        {PROJECT_TYPE.map(item => (
          <div>
            <Styled.OptionInput type="checkbox" id={toKebabCase(item)} />
            <Styled.Label htmlFor={toKebabCase(item)}>{item}</Styled.Label>
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
