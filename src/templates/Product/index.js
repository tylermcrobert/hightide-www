import React, { useContext, memo } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Styled from './Styled'

import useVariant from './hooks/useVariant'

const Product = memo(({ data: productData }) => {
  const { descriptionHtml, title } = productData
  const { currentVariantId, updateOption, currentOptions } = useVariant(
    productData
  )

  const { addItem } = useContext(StoreCtx)
  const imgUrl = productData.images[0] && productData.images[0].src

  return (
    <Wrap>
      <Section>
        <Styled.Wrapper>
          <img src={imgUrl} alt={title} />
          <div>
            <Styled.ProductDetail>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              {productData.options.map(item => (
                <div key={item.name}>
                  <h4>{item.name}</h4>
                  {item.values.map(option => (
                    <p
                      key={option.value}
                      onClick={() =>
                        updateOption({ [item.name]: option.value })
                      }
                    >
                      {option.value}
                    </p>
                  ))}
                </div>
              ))}
            </Styled.ProductDetail>
            <Button onClick={() => addItem(currentVariantId)}>
              Add to Cart
            </Button>
          </div>
        </Styled.Wrapper>
      </Section>
    </Wrap>
  )
})

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
