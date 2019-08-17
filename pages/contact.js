import React from 'react'
import Meta from '../components/Meta'
import Template from '../templates/Contact'
import * as prismicApi from '../util/prismicApi'

export default function Contact({ data }) {
  return (
    <>
      <Meta title="Contact" url="contact" />
      <Template data={data} />
    </>
  )
}

Contact.getInitialProps = async () => {
  const contact = await prismicApi.getSingle('page_contact')
  return { data: { contact } }
}
