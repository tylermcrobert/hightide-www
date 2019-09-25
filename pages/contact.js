import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Contact'
import { Client } from 'util/prismic'

export default function Contact({ data }) {
  return (
    <>
      <Meta title="Contact" url="contact" />
      <Template data={data} />
    </>
  )
}

Contact.getInitialProps = async ({ req }) => {
  const contact = await Client(req).getSingle('page_contact')
  return { data: { contact } }
}
