import React, { useContext, memo, createContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Heading from 'components/Heading'
import Styled from './Styled'
import useVariantHelper from './hooks/useVariantHelper'
import useToggle from './hooks/useToggle'

const ProductCtx = createContext()

const Product = memo(({ data: productData }) => {
  const { descriptionHtml, title } = productData
  const { currentVariant, updateOption, selectedOptions } = useVariantHelper(
    productData
  )
  const { addItem } = useContext(StoreCtx)
  const imgUrl = productData.images[0] && productData.images[0].src

  const price = currentVariant
    ? currentVariant.price
    : productData.variants[0].price

  const toggleRef = useToggle()

  return (
    <ProductCtx.Provider value={{ productData, updateOption, selectedOptions }}>
      <Wrap>
        <Section>
          <Styled.Wrapper>
            <img src={imgUrl} alt={title} />
            <div>
              <Styled.ProductDetail>
                <Styled.TitlePriceWrapper>
                  <Heading level={1} as="h1" headingStyle={1}>
                    {title}
                  </Heading>
                  <div>${price} USD</div>
                </Styled.TitlePriceWrapper>

                <Options />
                <Styled.Description
                  ref={toggleRef}
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
  const { updateOption, selectedOptions, productData } = useContext(ProductCtx)

  return (
    <div>
      {productData.options.map(option => (
        <div key={option.name}>
          <h5>{option.name}</h5>

          {/* Variants */}
          <Styled.OptionWrapper>
            {option.values.map(variant => {
              const isSelected = selectedOptions[option.name] === variant.value

              return (
                <Styled.Option
                  isSelected={isSelected}
                  key={variant.value}
                  onClick={() => updateOption({ [option.name]: variant.value })}
                >
                  {variant.value}
                </Styled.Option>
              )
            })}
          </Styled.OptionWrapper>
        </div>
      ))}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
