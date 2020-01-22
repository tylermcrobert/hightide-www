import { FormReturn } from 'templates/Contact/useForm'

/* eslint-disable @typescript-eslint/no-var-requires */
const sgMail = require('@sendgrid/mail')

export default (req, res) => {
  const { name, email, synopsis, company } = req.body as FormReturn

  const html = `
    <p>
      ${synopsis}
    </p>

    <div style="width: 16px; margin: 16px 0; border-bottom: 1px solid #999"></div>
    
    <p>
      Sent via High Tide contact form.
      <br />
      Name: ${name}
      <br />
      Company: ${company}
    </p>
  `

  sgMail.setApiKey(process.env.SENDGRID_TOKEN)
  sgMail
    .send({
      to: 'info@hightidenyc.com',
      from: {
        email,
        name,
      },
      subject: `High Tide x ${company} Project Inquiry`,
      text: `
        name: ${name}
        company: ${company}
        synopsis: ${synopsis}
      `,
      html,
    })
    .then(() => res.status(200).json({ success: true }))
    .catch(err => {
      // eslint-disable-next-line no-console
      res.status(400).json({ err })
    })
}
