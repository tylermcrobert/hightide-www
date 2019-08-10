import {
  title,
  siteUrl,
  social,
  description,
  previewImage,
} from '../../site.config'

const Meta = () => (
  <>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta property="og:image" content={previewImage} />
    <meta property="og:title" content={title} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:site_name" content={title} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={`@${social.twitter}`} />
    <meta name="twitter:creator" content={`@${social.twitter}`} />
    <meta name="twitter:image" content={previewImage} />

    <link rel="canonical" href={siteUrl} />
  </>
)

export default Meta
