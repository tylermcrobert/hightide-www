/* eslint-disable @typescript-eslint/camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'
import qs from 'query-string'
import { api } from 'prismic-javascript'

export const PAYLOAD = {
  api_token: process.env.JUDGE_ME_TOKEN,
  shop_domain: 'hightidenyc.myshopify.com',
}

export const apiLink = (route: string, query: object | null) => {
  const queryString = qs.stringify({ ...PAYLOAD, ...query })
  return `https://judge.me${route}/?${queryString}`
}

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  const route = apiReq.query.route && apiReq.query.route.toString()

  if (!route) {
    apiRes.status(400).json({ message: 'Must include route param' })
  }

  const url = apiLink(route, { ...apiReq.query })
  const req = await fetch(url, {
    method: apiReq.method,
  })
  const json = await req.json()
  apiRes.status(req.status).json(json)
}
