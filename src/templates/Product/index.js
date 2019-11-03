import React from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import PropTypes from 'prop-types'
import Styled from './Styled'

const Product = ({ data }) => {
  const { descriptionHtml, title } = data

  return (
    <Wrap>
      <Section>
        <Styled.Wrapper>
          <img src={data.images[0].src} alt={title} />
          <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          </div>
        </Styled.Wrapper>
      </Section>
    </Wrap>
  )
}

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
