import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Contact'
import { Client } from 'middleware/prismic'

export default function Contact({ site }) {
  return (
    <>
      <Meta title="Contact" url="contact" />
      <Template hero={site.data.contact_hero} />
    </>
  )
}

Contact.getInitialProps = async ({ req }) => {
  const site = await Client(req).getSingle('site')
  return { site }
}
