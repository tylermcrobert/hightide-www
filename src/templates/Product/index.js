import React, { useContext, memo, createContext } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Heading from 'components/Heading'
import { client } from 'middleware/getShopifyCheckout'
import { Price } from 'components/shopify'
import Box from 'components/Box'
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

            <ProductDetail />
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
      <Box mb={5}>
        <Box mb={0}>
          <Heading level={1} as="h1" noMargin headingStyle={1}>
            {title}
          </Heading>
        </Box>

        <Price variant={currentVariant} product={productData} />
      </Box>
      <Box mb={5}>
        <ProductOptions />
      </Box>
      <Box mb={3}>
        <Styled.Description
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </Box>
      <AddToCartButton />
    </div>
  )
}

/*
  NAMING

  OPTION CATEGORY:
    the category like 'size', color
  OPTION CATEGORY:
    The actual option like 'sm'
  VARIANT:
    the name of the SHOPIFY PRODUCT like 'sm / purple'

 */

const ProductOptions = () => {
  const { productData } = useContext(ProductCtx)

  return (
    <div>
      {productData.options.map(option =>
        // only return if there are multiple options
        option.values.length > 1 ? (
          <div key={option.name}>
            <h5>{option.name}</h5>
            <ul>
              {option.values.map(variant => (
                <Variant
                  optionCategory={option.name}
                  optionName={variant.value}
                  key={variant.value}
                />
              ))}
            </ul>
          </div>
        ) : null
      )}
    </div>
  )
}

const Variant = ({ optionName, optionCategory }) => {
  const { updateOption, selectedOptions, productData } = useContext(ProductCtx)

  const getAvailibility = () => {
    const variantButtonOptions = {
      ...selectedOptions,
      [optionCategory]: optionName,
    }

    const optionVariant = client.product.helpers.variantForOptions(
      productData,
      variantButtonOptions
    )

    return optionVariant.available
  }

  return (
    <Styled.Option
      isSelected={selectedOptions[optionCategory] === optionName}
      isAvailable={getAvailibility()}
      key={optionName}
      onClick={() => updateOption({ [optionCategory]: optionName })}
    >
      {optionName}
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
