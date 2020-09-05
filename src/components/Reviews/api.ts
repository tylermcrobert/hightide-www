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

type Reviews = {
  current_page: number
  per_page: number
  reviews: []
}

const api = {
  getReviews: async (): Promise<Reviews> => {
    return fetch(apiLink('/reviews')).then(res => handleRes(res))
  },

  createReview: async (payload: {
    name: string
    email: string
    rating: number
    title: string
    body: string
    url: string
    platform: string
  }): Promise<any> => {
    console.log(apiLink('/reviews', payload))

    return (
      fetch(apiLink('/reviews', payload), { method: 'POST' })
        //
        .then(res => handleRes(res))
    )
  },
}

export default api
