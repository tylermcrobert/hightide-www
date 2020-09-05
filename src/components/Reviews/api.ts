/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */

import qs from 'query-string'

const apiLink = (route: string, payload: object | void) => {
  return `/api/reviews?${qs.stringify({ ...payload, route })}`
}

const handleRes = (res: Response) => {
  if (res.ok) {
    return res.json()
  }
  console.error(res.statusText)
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
}

export type Average = {
  histogram: {
    rating: number
    frequency: number
    percentage: number
  }[]
  numberOfReviews: number
  averageRating: number
}

type ParsedReview = {
  isVerifiedBuyer: boolean
  thumbsUp: number
  thumbsDown: number
  body: string
  title: string | null
  score: number
  date: string | null
  reviewer: {
    fullName: any
    initial: any
    lastInitial: any
  }
}

export type StoreInfo = { url: string; platform: string }

const getHtml = (html: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  return doc
}

/** search for attribute and fetch its value */
const getAttr = (doc: Document | Element, attr: string): any => {
  const node = doc.querySelector(`[${attr}]`)
  return node ? node.getAttribute(attr) : undefined
}

/** Extract text from unknown element */
const getText = (el: Element | null) => (el ? el.textContent || '' : '')

/**
 * Api Controller
 */

export class ApiController {
  storeInfo: StoreInfo

  constructor(storeInfo: StoreInfo) {
    this.storeInfo = storeInfo
  }

  async getReviews(): Promise<Reviews> {
    return fetch(apiLink('/api/v1/reviews')).then(res => handleRes(res))
  }

  /**
   * Sorted reviews
   */
  async getSortdReviews(): Promise<null | ParsedReview[]> {
    return fetch(
      'https://judge.me/reviews/reviews_for_widget?url=judge-me-demo-store.myshopify.com&shop_domain=judge-me-demo-store.myshopify.com&platform=shopify&per_page=5&product_id=3784779038780&sort_by=most_helpful&sort_dir=&search='
    )
      .then(res => handleRes(res))
      .then(res => {
        if (res.html) {
          const doc = getHtml(res.html)

          const reviews = Array.from(doc.querySelectorAll('.jdgm-rev')).map(
            reviewDOM => {
              const $body = reviewDOM.querySelector('.jdgm-rev__body')
              const $title = reviewDOM.querySelector('.jdgm-rev__title')
              const $date = reviewDOM.querySelector('.jdgm-rev__timestamp')

              return {
                isVerifiedBuyer:
                  reviewDOM.getAttribute('data-verified-buyer') === 'true',
                thumbsUp: Number(reviewDOM.getAttribute('data-thumb-up-count')),
                thumbsDown: Number(
                  reviewDOM.getAttribute('data-thumb-down-count')
                ),
                body: getText($body),
                title: getText($title),
                score: Number(getAttr(reviewDOM, 'data-score')),
                date: $date ? $date.getAttribute('data-content') : null,
                reviewer: {
                  fullName: getAttr(reviewDOM, 'data-fullname'),
                  initial: getAttr(reviewDOM, 'data-all-initials'),
                  lastInitial: getAttr(reviewDOM, 'data-last-initial'),
                },
              }
            }
          )

          return reviews
        }
        return null
      })
  }

  /**
   * Get averages
   */
  async getAverage(): Promise<Average | null> {
    return fetch(
      apiLink('/api/v1/widgets/product_review', {
        external_id: 4640900874288,
      })
    )
      .then(res => handleRes(res))
      .then(res => {
        if (res.widget) {
          const doc = getHtml(res.widget)

          const histogram = Array.from(
            doc.querySelectorAll('.jdgm-histogram__row')
          )
            .map(item => ({
              rating: Number(item.getAttribute('data-rating')),
              frequency: Number(item.getAttribute('data-frequency')),
              percentage: Number(item.getAttribute('data-percentage')),
            }))
            .filter(item => item.rating)

          const averageRating = Number(getAttr(doc, 'data-average-rating'))
          const numberOfReviews = Number(getAttr(doc, 'data-number-of-reviews'))

          return {
            histogram,
            numberOfReviews,
            averageRating,
          }
        }
        return null
      })
  }

  async createReview(payload: ReviewPost): Promise<any> {
    return fetch(
      apiLink('/api/v1/reviews', {
        ...payload,
        ...this.storeInfo,
      }),
      {
        method: 'POST',
      }
    ).then(res => handleRes(res))
  }
}
