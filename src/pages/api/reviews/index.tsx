/* eslint-disable @typescript-eslint/camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'
import { apiLink } from './[handle]'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  const url = apiLink('/reviews', { ...apiReq.query })

  const req = await fetch(url, {
    method: apiReq.method,
  })

  const json = await req.json()
  apiRes.status(req.status).json(json)
}
