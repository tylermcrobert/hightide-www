import React from 'react'
import PropTypes from 'prop-types'
import config from 'site.config'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Section from 'components/Section'
import SectionHead from 'components/SectionHead'

import Styled from './Styled'

const handle = config.social.instagram

const InstagramLink = () => (
  <a
    href={`https://instagram.com/${handle}/`}
    target="_blank"
    rel="noopener noreferrer"
  >
    Follow us
  </a>
)

function Instagram({ apiResponse }) {
  if (apiResponse && apiResponse.data) {
    return (
      <Section>
        <SectionHead link={<InstagramLink />}>Instagram</SectionHead>
        <Styled.Wrapper>
          {apiResponse.data.map(item => (
            <LazyImg
              key={item.images.standard_resolution.url}
              src={item.images.standard_resolution.url}
              alt={item.caption.text}
              ratio={0.5}
            />
          ))}
        </Styled.Wrapper>
      </Section>
    )
  }
  console.error('No Instagram API response found.')
  return null
}

Instagram.propTypes = {
  apiResponse: PropTypes.shape({ data: PropTypes.array }).isRequired,
}

export default Instagram
