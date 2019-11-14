import PropTypes from 'prop-types'
import Head from 'next/head'
import config, { siteUrl, social, previewImage } from 'site.config'
import formatTitle from 'util/formatTitle'

const removeLeadingSlash = str => str.replace(/^\/+/, '')

const Meta = ({ url, title: titleProp, image, description }) => {
  const pageUrl = url ? `${siteUrl}/${removeLeadingSlash(url)}` : siteUrl

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <Favicon />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:title"
        content={formatTitle(titleProp) || config.title}
      />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={config.title} />
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

const Favicon = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#000000"
    />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
  </>
)

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
