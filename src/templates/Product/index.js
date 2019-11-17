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
import { Wrapper as CarouselWrap, ImageWrapper } from 'components/Carousel'
import OrphanRemover from 'components/OrphanRemover'
import Styled from './Styled'
import useOptionSelect from './hooks/useOptionSelect'

const ProductCtx = createContext()
const { variantForOptions } = client.product.helpers

const Product = memo(({ data: productData }) => {
  const { updateOptions, selectedOptions } = useOptionSelect(productData)
  const currentVariant = variantForOptions(productData, selectedOptions)

  return (
    <ProductCtx.Provider
      value={{ currentVariant, productData, updateOptions, selectedOptions }}
    >
      <Wrap>
        <Styled.Wrapper>
          <Section>
            <ProductImages />
          </Section>
          <Section>
            <ProductDetail />
          </Section>
        </Styled.Wrapper>
      </Wrap>
    </ProductCtx.Provider>
  )
})

const ProductImages = () => {
  const { productData } = useContext(ProductCtx)

  const images = productData.images.map(item => (
    <Box mb={0}>
      <img src={item.src} alt={item.altText} />
    </Box>
  ))

  return (
    <div>
      <Styled.CarouselWrapper>
        <CarouselWrap items={images}>
          <ImageWrapper />
        </CarouselWrap>
      </Styled.CarouselWrapper>
      <Styled.ImageWrapper>{images}</Styled.ImageWrapper>
    </div>
  )
}

const ProductDetail = () => {
  const { productData, currentVariant } = useContext(ProductCtx)
  const { descriptionHtml, title } = productData

  return (
    <div>
      <Box mb={5}>
        <Box mb={0}>
          <Heading level={1} as="h1" noMargin headingStyle={1}>
            <OrphanRemover>{title}</OrphanRemover>
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
    <>
      {productData.options.map(option =>
        // only return if there are multiple options
        option.values.length > 1 ? (
          <Box mb={3} key={option.name}>
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
          </Box>
        ) : null
      )}
    </>
  )
}

const Variant = ({ optionName, optionCategory }) => {
  const { updateOptions, selectedOptions, productData } = useContext(ProductCtx)

  const isAvailable = (() => {
    const variantButtonOptions = {
      ...selectedOptions,
      [optionCategory]: optionName,
    }

    const optionVariant = variantForOptions(productData, variantButtonOptions)

    // make available in instances where thees multiple option groups
    return productData.options.length > 1 ? true : optionVariant.available
  })()

  return (
    <Styled.Option
      isSelected={
        isAvailable ? selectedOptions[optionCategory] === optionName : false
      }
      isAvailable={isAvailable}
      key={optionName}
      onClick={() => updateOptions({ [optionCategory]: optionName })}
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
