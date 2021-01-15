import React from 'react'
import PropTypes from 'prop-types'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Section from 'components/Section'
import SectionHead from 'components/SectionHead'
import config from 'siteconfig'

import Styled from './Styled'

const handle = config.social.instagram
const url = `https://instagram.com/${handle}/`

const InstagramLink = () => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    Follow us
  </a>
)

const Instagram: React.FC<{ images: string[] }> = ({ images }) => {
  if (images && images.length > 0) {
    return (
      <Section>
        <SectionHead link={<InstagramLink />}>Instagram</SectionHead>
        <Styled.Wrapper>
          {images.map(image => (
            <a href={url} rel="noopener noreferrer" target="_blank" key={image}>
              <LazyImg src={image} ratio={0.5} />
            </a>
          ))}
        </Styled.Wrapper>
      </Section>
    )
  }
  console.error('No Instagram API response found.')
  return null
}

export default Instagram
