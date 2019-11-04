import React, { useContext, memo, createContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Styled from './Styled'
import useVariant from './hooks/useVariant'

const ProductCtx = createContext()

const Product = memo(({ data: productData }) => {
  const { descriptionHtml, title } = productData
  const { currentVariant, updateOption, currentOptions } = useVariant(
    productData
  )
  const { addItem } = useContext(StoreCtx)
  const imgUrl = productData.images[0] && productData.images[0].src

  return (
    <ProductCtx.Provider value={{ productData, updateOption, currentOptions }}>
      <Wrap>
        <Section>
          <Styled.Wrapper>
            <img src={imgUrl} alt={title} />
            <div>
              <Styled.ProductDetail>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                <Options />
              </Styled.ProductDetail>
              <Button onClick={() => addItem(currentVariant.id)}>
                Add to Cart
              </Button>
            </div>
          </Styled.Wrapper>
        </Section>
      </Wrap>
    </ProductCtx.Provider>
  )
})

const Options = () => {
  const { updateOption, currentOptions, productData } = useContext(ProductCtx)

  return (
    <div>
      {productData.options.map(option => (
        <div key={option.name}>
          <h4>{option.name}</h4>
          {option.values.map(variant => {
            const isCurrent = currentOptions[option.name] === variant.value
            return (
              <li
                key={variant.value}
                onClick={() => updateOption({ [option.name]: variant.value })}
              >
                {isCurrent ? ' - ' : ''}
                {variant.value}
              </li>
            )
          })}
        </div>
      ))}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
