import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Contact'
import { Client } from 'middleware/prismic'
import prerender from 'middleware/prerender'

export default function Contact({ site }) {
  return (
    <>
      <Meta title="Contact" url="contact" />
      <Template hero={site.data.contact_hero} />
    </>
  )
}

Contact.getInitialProps = async ({ req, res }) => {
  const site = await Client(req).getSingle('site')
  prerender(res)
  return { site }
}
