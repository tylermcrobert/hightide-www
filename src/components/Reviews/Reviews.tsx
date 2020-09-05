import React, { useEffect, useState, FormEvent } from 'react'
import styled from 'styled-components'
import { sizes } from 'style/theme'
import {
  ApiController,
  Reviews as ReviewsType,
  Review as ReviewType,
  ReviewPost,
} from './api'

const api = new ApiController({
  url: 'hightidenyc.myshopify.com',
  platform: 'shopify',
})

const Star = styled.svg<{ enabled: boolean }>`
  width: 1rem;
  margin-right: 0.2rem;
  opacity: ${p => (p.enabled ? '1' : '.5')};
`

const StarSvg: React.FC<{ className?: string; enabled: boolean }> = ({
  className,
  enabled,
}) => (
  <Star
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    enabled={enabled}
  >
    <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
  </Star>
)

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewsType | null>(null)

  useEffect(() => {
    api.getAverage().then(res => res)
    api.getReviews().then(res => {
      setReviews(res)
    })
    api.getSortdReviews().then(res => {
      // console.log(res.html)
    })
  }, [])

  console.log(reviews)

  return (
    <div>
      <div>
        <ReviewPrompt />
      </div>
      <div>
        {reviews && reviews.reviews.map(review => <Review review={review} />)}
      </div>
    </div>
  )
}

const ReviewPrompt: React.FC = () => {
  const [state, setState] = useState<ReviewPost>({
    name: '',
    email: '',
    rating: 5,
    title: '',
    body: '',
  })

  const postReview = async (e: FormEvent) => {
    e.preventDefault()
    await api.createReview(state)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={state.name}
          placeholder="Name"
          onChange={e => setState({ ...state, name: e.target.value })}
        />
        <input
          type="email"
          value={state.email}
          placeholder="Email"
          onChange={e => setState({ ...state, email: e.target.value })}
        />
        <input
          type="text"
          value={state.title}
          placeholder="Title"
          onChange={e => setState({ ...state, title: e.target.value })}
        />
        <input
          type="text"
          value={state.body}
          placeholder="body"
          onChange={e => setState({ ...state, body: e.target.value })}
        />
        <button type="submit" onClick={postReview}>
          Post Review
        </button>
      </form>
    </div>
  )
}
const Review: React.FC<{ review: ReviewType }> = ({ review }) => {
  const date = new Date(review.created_at)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const dateStr = `${day}.${month}.${year}`

  return (
    <S.Review>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarSvg enabled />
        ))}
      </div>
      <div>
        <strong>{review.title}</strong>
      </div>
      <S.Date>
        {dateStr} • {review.verified && 'Verified'}
      </S.Date>
      {review.body}
    </S.Review>
  )
}

const S = {
  Review: styled.div`
    border: 1px solid grey;
    margin-bottom: 1rem;
    padding: 0.5rem;
  `,
  Date: styled.div`
    color: grey;
    margin-bottom: 0.5rem;
  `,
}

export default Reviews
