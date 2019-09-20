import React from 'react'
import Meta from 'components/Meta'
import Template from 'templates/Contact'

export default function Contact({ data }) {
  return (
    <>
      <Meta title="Contact" url="contact" />
      <Template data={data} />
    </>
  )
}

Contact.getInitialProps = async ({ prismicApi }) => {
  const contact = await prismicApi.getSingle('page_contact')
  return { data: { contact } }
}
