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

const ProductCtx = createContext()

const Product = memo(({ data: productData }) => {
  const { currentVariant, updateOption, selectedOptions } = useVariantHelper(
    productData
  )

  return (
    <ProductCtx.Provider
      value={{ currentVariant, productData, updateOption, selectedOptions }}
    >
      <Wrap>
        <Section>
          <Styled.Wrapper>
            <img
              src={productData.images[0] && productData.images[0].src}
              alt={productData.title}
            />
            <div>
              <ProductDetail />
              <AddToCartButton />
            </div>
          </Styled.Wrapper>
        </Section>
      </Wrap>
    </ProductCtx.Provider>
  )
})

const ProductDetail = () => {
  const { productData, currentVariant } = useContext(ProductCtx)
  const { descriptionHtml, title } = productData

  return (
    <div>
      <Styled.SectionWrapper>
        <Heading level={1} as="h1" headingStyle={1}>
          {title}
        </Heading>
        <div>
          <Price variant={currentVariant} product={productData} />
        </div>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Options />
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Styled.Description
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </Styled.SectionWrapper>
    </div>
  )
}

const Options = () => {
  const { productData } = useContext(ProductCtx)

  return (
    <div>
      {productData.options.map(option => {
        const isShown = option.values.length > 1

        return isShown ? (
          <div key={option.name}>
            <h5>{option.name}</h5>

            {/* Variants */}
            <ul>
              {option.values.map(variant => (
                <Variant
                  option={option}
                  variant={variant}
                  key={variant.value}
                />
              ))}
            </ul>
          </div>
        ) : null
      })}
    </div>
  )
}

const Variant = ({ variant, option }) => {
  const { updateOption, selectedOptions, productData } = useContext(ProductCtx)

  const variantButtonOptions = {
    ...selectedOptions,
    [option.name]: variant.value,
  }

  const optionVariant = client.product.helpers.variantForOptions(
    productData,
    variantButtonOptions
  )

  return (
    <Styled.Option
      isSelected={selectedOptions[option.name] === variant.value}
      isAvailable={optionVariant.available}
      key={variant.value}
      onClick={() => updateOption({ [option.name]: variant.value })}
    >
      {variant.value}
    </Styled.Option>
  )
}

const AddToCartButton = () => {
  const { currentVariant } = useContext(ProductCtx)
  const { addItem } = useContext(StoreCtx)

  return (
    <Button
      disabled={!currentVariant.available}
      onClick={currentVariant ? () => addItem(currentVariant.id) : null}
    >
      {currentVariant.available ? 'Add to Cart' : 'Unavailable'}
    </Button>
  )
}

Product.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Product
