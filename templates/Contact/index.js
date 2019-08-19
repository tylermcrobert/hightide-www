import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Styled from './Styled'
// import PropTypes from 'prop-types'

const INPUTS = [
  { placeholder: 'Name', required: true },
  { placeholder: 'Email Address', required: true },
  { placeholder: 'Location', required: false },
  { placeholder: 'Phone Number', required: true },
  { placeholder: 'Company Name', required: false },
  { placeholder: 'Website', required: false },
]
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

const BUDGET = ['Above 100k', '75–100k', '50–75k', '25-50k', 'Below 25k']

export default function Contact({ data }) {
  const { hero_text: hero, body } = data.contact.data
  return (
    <>
      <Wrap>
        <Section.Large>{RichText.render(body[0].items[0].hero)}</Section.Large>
        <form>
          <Section>
            <Styled.Cols>
              {INPUTS.map(item => (
                <div>
                  <Styled.TextInput
                    type="text"
                    placeholder={`${item.placeholder}${
                      item.required ? ' *' : ''
                    }`}
                  />
                </div>
              ))}
            </Styled.Cols>
          </Section>
          <Section>
            <Styled.DetailsWrapper>
              <div>
                <Styled.Title>Type Of Project</Styled.Title>

                <Styled.ProjTypeWrapper>
                  <List items={PROJECT_TYPE} />
                </Styled.ProjTypeWrapper>
              </div>
              <div>
                <Styled.Title>Budget</Styled.Title>
                <ul>
                  <List items={BUDGET} />
                </ul>
              </div>
            </Styled.DetailsWrapper>
          </Section>
          <textarea />
        </form>
      </Wrap>
    </>
  )
}

function List({ items }) {
  const [enabledItems, setEnabledItem] = useState([])

  const handleClick = num => {
    if (enabledItems.includes(num)) {
      const newArray = [...enabledItems]
      const index = newArray.indexOf(num)
      newArray.splice(index, 1)
      setEnabledItem(newArray)
    } else {
      setEnabledItem([...enabledItems, num])
    }
  }
  return items.map((item, i) => (
    <li>
      <Styled.Option
        onClick={() => handleClick(i)}
        enabled={enabledItems.includes(i)}
      >
        {item}
      </Styled.Option>
    </li>
  ))
}

// About.propTypes = {}
