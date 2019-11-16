import React, { useContext, memo, createContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Heading from 'components/Heading'
import { client } from 'middleware/getShopifyCheckout'
import { Price } from 'components/shopify'
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
                  <div>
                    <Price variant={currentVariant} product={productData} />
                  </div>
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
      {productData.options.map(option => {
        const isShown = option.values.length > 1

        return isShown ? (
          <div key={option.name}>
            <h5>{option.name}</h5>

            {/* Variants */}
            <Styled.OptionWrapper>
              {option.values.map(variant => {
                const isSelected =
                  selectedOptions[option.name] === variant.value

                const currentOptions = {
                  ...selectedOptions,
                  [option.name]: variant.value,
                }

                const currentVariant = client.product.helpers.variantForOptions(
                  productData,
                  currentOptions
                )

                const isAvailable = currentVariant.available

                return (
                  <Styled.Option
                    isSelected={isSelected}
                    isAvailable={isAvailable}
                    key={variant.value}
                    onClick={() =>
                      updateOption({ [option.name]: variant.value })
                    }
                  >
                    {variant.value}
                  </Styled.Option>
                )
              })}
            </Styled.OptionWrapper>
          </div>
        ) : null
      })}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
