import React, { useEffect } from 'react'
import api from './api'

const Reviews = () => {
  useEffect(() => {
    const reviews = api.getReviews().then(res => {
      console.log(res)
    })
  }, [])

  const postReview = async () => {
    const review = await api.createReview({
      name: 'Tyler McRobert',
      email: 'tyler@this.design',
      rating: 5,
      title: 'Cras mattis consectetur purus sit amet fermentum',
      body:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      url: 'hightidenyc.myshopify.com',
      platform: 'shopify',
    })
    console.log(review)
  }
  return (
    <div>
      <button type="button" onClick={postReview}>
        Post Review
      </button>
    </div>
  )
}

export default Reviews
