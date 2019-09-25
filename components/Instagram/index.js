import React from 'react'
import PropTypes from 'prop-types'
import config from 'site.config'
import LazyImg from '@tylermcrobert/react-lazyimg'
import Styled from './Styled'

function Instagram({ apiResponse }) {
  if (apiResponse && apiResponse.data) {
    const handle = config.social.instagram

    return (
      <div>
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
        <Styled.Link
          href={`https://instagram.com/${handle}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Us
        </Styled.Link>
      </div>
    )
  }
  console.error('No Instagram API response found.')
  return null
}

Instagram.propTypes = {
  apiResponse: PropTypes.shape({ data: PropTypes.array }).isRequired,
}

export default Instagram
