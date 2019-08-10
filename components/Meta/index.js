import PropTypes from 'prop-types'
import Head from 'next/head'
import config, { siteUrl, social, previewImage } from '../../site.config'
import formatTitle from '../../util/formatTitle'

const removeLeadingSlash = str => str.replace(/^\/+/, '')

const Meta = ({ url, title: titleProp, image, description }) => {
  const pageUrl = url ? `${siteUrl}/${removeLeadingSlash(url)}` : siteUrl

  return (
    <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <Favicon />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={titleProp || config.title} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={titleProp || config.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${social.twitter}`} />
      <meta name="twitter:creator" content={`@${social.twitter}`} />
      <meta name="twitter:image" content={image} />

      {url && <link rel="canonical" href={pageUrl} />}
      <title>{formatTitle(titleProp)}</title>
    </Head>
  )
}

function Favicon() {
  const path = '/static/favicon'
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${path}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${path}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${path}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${path}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${path}/safari-pinned-tab.svg`}
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ff0000" />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
Meta.defaultProps = {
  title: null,
  image: previewImage,
  description: config.description,
}

Meta.propTypes = {
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default Meta
