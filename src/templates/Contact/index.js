import React, { createContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from 'style'
import Error from 'next/error'

import Section from 'components/Section'
import PageIntro from 'components/PageIntro'
import Button from 'components/Button'
import useForm from './hooks/useForm'
// Blocks
import ContactInfo from './ContactInfo'
import ProjectType from './ProjectType'
import Budget from './Budget'
import Synopsis from './Synopsis'
// Style
import Styled from './Styled'

export default function Contact({ hero }) {
  const { error, state, setState, handleSubmit, canSubmit } = useForm()
  if (!error) {
    return (
      <ContactCtx.Provider value={{ state, setState }}>
        <Wrap>
          <PageIntro>{RichText.render(hero)}</PageIntro>
          <form onSubmit={handleSubmit}>
            <Section>
              <ContactInfo />
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
                <Button type="submit" disabled={!canSubmit}>
                  Submit
                </Button>
              </Styled.SubmitWrapper>
            </Section>
          </form>
        </Wrap>
      </ContactCtx.Provider>
    )
  }
  return <Error />
}

// About.propTypes = {}

export const ContactCtx = createContext()
