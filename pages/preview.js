import React from 'react'
import Router from 'next/router'
import { Client, linkResolver } from 'middleware/prismic'

const Preview = () => <div>Preview</div>

Preview.getInitialProps = async context => {
  try {
    const { token } = context.query
    const { res, req } = context

    const url = await Client(req).previewSession(token, linkResolver, '/')
    if (res) {
      res.writeHead(302, { Location: url })
      res.end()
    } else {
      Router.push(url)
    }
  } catch (e) {
    console.error(e)
  }
  return {}
}

export default Preview
