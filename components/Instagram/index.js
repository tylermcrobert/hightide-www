import React from 'react'
import PropTypes from 'prop-types'
import Styled from './Styled'
import config from '../../site.config'

function Instagram({ apiResponse }) {
  if (apiResponse && apiResponse.data) {
    const handle = config.social.instagram

    return (
      <div>
        <Styled.Wrapper>
          {apiResponse.data.map(item => (
            <img
              key={item.images.standard_resolution.url}
              src={item.images.standard_resolution.url}
              alt={item.caption.text}
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
