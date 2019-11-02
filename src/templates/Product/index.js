import React from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
// import PropTypes from 'prop-types'

const Product = ({ data }) => {
  const { descriptionHtml, title } = data

  console.log(data)

  return (
    <Wrap>
      <Section>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
      </Section>
    </Wrap>
  )
}

// Product.propTypes = {}

export default Product
