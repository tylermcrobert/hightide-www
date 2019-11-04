import React, { useContext, memo, createContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Heading from 'components/Heading'
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
  const price = currentVariant
    ? currentVariant.price
    : productData.variants[0].price

  return (
    <ProductCtx.Provider value={{ productData, updateOption, currentOptions }}>
      <Wrap>
        <Section>
          <Styled.Wrapper>
            <img src={imgUrl} alt={title} />
            <div>
              <Styled.ProductDetail>
                <Heading level={1} headingStyle={1}>
                  {title}
                </Heading>
                <div>${price} USD</div>
                <br />

                <Options />
                <Styled.Description
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </Styled.ProductDetail>
              <Button
                disabled={!currentVariant}
                onClick={
                  currentVariant ? () => addItem(currentVariant.id) : null
                }
              >
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
          <h5>{option.name}</h5>

          {/* Variants */}
          {option.values.map(variant => {
            const isCurrent = currentOptions[option.name] === variant.value
            return (
              <li>
                <button
                  type="button"
                  key={variant.value}
                  onClick={() => updateOption({ [option.name]: variant.value })}
                >
                  {isCurrent ? ' - ' : ''}
                  {variant.value}
                </button>
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
