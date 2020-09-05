import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sizes } from 'style/theme'
import api, { Reviews as ReviewsType, Review as ReviewType } from './api'

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewsType | null>(null)

  useEffect(() => {
    api.getReviews().then(res => {
      setReviews(res)
    })
  }, [])

  const postReview = async () => {
    const review = await api.createReview({
      name: 'Tyler McRobert',
      email: 'tyler.mcrobert@gmail.com',
      rating: 5,
      title: 'Great product',
      body:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      url: 'hightidenyc.myshopify.com',
      platform: 'shopify',
    })
  }
  return (
    <div>
      <button type="button" onClick={postReview}>
        Post Review
      </button>
      <div>
        {reviews && reviews.reviews.map(review => <Review review={review} />)}
      </div>
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
      {review.verified && 'VERIFIED'}
      <div>
        <strong>{review.title}</strong>
      </div>
      <S.Date>{dateStr}</S.Date>
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
