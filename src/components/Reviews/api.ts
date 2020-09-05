/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import qs from 'query-string'

const apiLink = (route: string, payload: object | void) =>
  `/api${route}?${payload ? qs.stringify(payload) : ''}`

const handleRes = (res: Response) => {
  if (res.ok) {
    return res.json()
  }
  throw Error(res.statusText)
}

export type Reviews = {
  current_page: number
  per_page: number
  reviews: Review[]
}

export type Review = {
  id: number
  title: string
  body: string
  rating: number
  product_external_id: number
  reviewer: {
    id: number
    external_id: unknown
    email: string
    name: string
    phone: string | null
    accepts_marketing: boolean
    unsubscribed_at: unknown | null
    source_email: unknown | null
    tags: unknown | null
  }
  source: string
  curated: string
  hidden: string
  verified: string
  featured: string
  created_at: string
  updated_at: string
  pictures: []
  ip_address: string
  product_title: string
  product_handle: string
}

export type ReviewPost = {
  name: string
  email: string
  rating: number
  title: string
  body: string
  url: string
  platform: string
}

const api = {
  getReviews: async (): Promise<Reviews> => {
    return fetch(apiLink('/reviews')).then(res => handleRes(res))
  },

  createReview: async (payload: ReviewPost): Promise<any> => {
    return (
      fetch(apiLink('/reviews', payload), { method: 'POST' })
        //
        .then(res => handleRes(res))
    )
  },
}

export default api
