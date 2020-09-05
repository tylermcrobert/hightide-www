/* eslint-disable @typescript-eslint/camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'
import qs from 'query-string'

export const PAYLOAD = {
  api_token: process.env.JUDGE_ME_TOKEN,
  shop_domain: 'hightidenyc.myshopify.com',
}

export const apiLink = (route: string, query: object | null) => {
  const queryString = qs.stringify({ ...PAYLOAD, ...query })
  return `https://judge.me/api/v1/${route}/?${queryString}`
}

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  const url = apiLink('/reviews', { ...apiReq.query })
  const req = await fetch(url, {
    method: apiReq.method,
  })
  const json = await req.json()
  apiRes.status(req.status).json(json)
}
