import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'

function DataWrapper({ data }) {
  const { link_type: type, url } = data.primary.video_mp4

  if (url && type === 'Media') {
    return <Video src={url} />
  }

  return null
}

DataWrapper.propTypes = {
  data: PropTypes.object.isRequired,
}

const Video = ({ src }) => {
  return (
    <Section>
      <video autoPlay loop muted playsInline>
        <source type="video/mp4" src={src} />
      </video>
    </Section>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default DataWrapper
