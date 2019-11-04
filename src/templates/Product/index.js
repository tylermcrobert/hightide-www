import React, { useContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Styled from './Styled'

const Product = ({ data }) => {
  const { descriptionHtml, title } = data

  const currentVariant = 0
  const { addItem } = useContext(StoreCtx)

  return (
    <Wrap>
      <Section>
        <Styled.Wrapper>
          <img src={data.images[currentVariant].src} alt={title} />
          <div>
            <Styled.ProductDetail>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            </Styled.ProductDetail>
            <Button onClick={() => addItem(data.variants[currentVariant].id)}>
              Add to Cart
            </Button>
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
