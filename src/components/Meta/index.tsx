/* eslint-disable react/no-danger */
import Head from 'next/head'
import config, { siteUrl, social, previewImage } from 'siteconfig'
import formatTitle from 'util/formatTitle'

const removeLeadingSlash = str => str.replace(/^\/+/, '')

interface Props {
  url: string
  title: string
  image?: string
  description?: string
}

const Meta: React.FC<Props> = ({
  url,
  title: titleProp,
  image = previewImage,
  description = config.description,
}) => {
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
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {url && <link rel="canonical" href={pageUrl} />}
      <title>{formatTitle(titleProp)}</title>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QFYMRC66ZK"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QFYMRC66ZK');
        `,
        }}
      />
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

export default Meta
