import React from 'react'
import Section from 'components/Section'
import PropTypes from 'prop-types'
import Marquee from 'components/Marquee'
import SectionHead from 'components/SectionHead'
import Styled from './Styled'

function Clients({ items }) {
  if (items && items.length) {
    return (
      <Section>
        <>
          <SectionHead>Clients</SectionHead>
          <Marquee>
            <Styled.Grid>
              {items.map(
                ({ client_name: clientName, logo }, i) =>
                  clientName &&
                  logo && (
                    <img key={`${logo}${i}`} src={logo.url} alt={clientName} />
                  )
              )}
            </Styled.Grid>
          </Marquee>
        </>
      </Section>
    )
  }
  return null
}

Clients.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Clients
