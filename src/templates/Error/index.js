import React from 'react'
import PropTypes from 'prop-types'
import { Wrap } from 'style'
import Section from 'components/Section'
import Styled from './Styled'

function Error({ statusCode }) {
  return (
    <Styled.Wrapper>
      <Wrap>
        <Section>
          <Section>
            <Styled.FreakedOutPalm src="/errorPalm.svg" />
          </Section>

          {statusCode && <h1>Error {statusCode}.</h1>}
          {statusCode === 404 ? (
            <h2>
              Sorry, this page doesn’t exist anymore. <br />
              What am I doing here? <br />
              Who am I?
            </h2>
          ) : (
            <h1>Woah, this sucks</h1>
          )}
        </Section>
      </Wrap>
    </Styled.Wrapper>
  )
}

Error.defaultProps = {
  statusCode: null,
}

Error.propTypes = {
  statusCode: PropTypes.number,
}

export default Error
