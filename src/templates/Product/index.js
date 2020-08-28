import React, { useContext, memo, createContext, useState } from 'react'
import { Wrap } from 'style'
import Section from 'components/Section'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { StoreCtx } from 'components/StoreProvider'
import Heading from 'components/Heading'
import BackInStock from 'components/BackInStock/BackInStock'
import { client } from 'middleware/getShopifyCheckout'
import { Price } from 'components/shopify'
import Box from 'components/Box'
import { Wrapper as CarouselWrap, ImageWrapper } from 'components/Carousel'
import OrphanRemover from 'components/OrphanRemover'
import { Input } from 'components/FormElements'
import Styled from './Styled'
import useOptionSelect from './hooks/useOptionSelect'

export const ProductCtx = createContext()
const { variantForOptions } = client.product.helpers

const Product = memo(({ data: productData }) => {
  const { updateOptions, selectedOptions } = useOptionSelect(productData)
  const currentVariant = variantForOptions(productData, selectedOptions)
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <ProductCtx.Provider
      value={{
        currentVariant,
        productData,
        updateOptions,
        selectedOptions,
        setModalOpen,
      }}
    >
      <Wrap>
        <Styled.Wrapper>
          <ProductImages />
          <ProductDetail />
        </Styled.Wrapper>
        {isModalOpen && <BackInStock onClose={() => setModalOpen(false)} />}
      </Wrap>
    </ProductCtx.Provider>
  )
})

const ProductImages = () => {
  const { productData } = useContext(ProductCtx)

  const images = productData.images.map(item => (
    <img src={item.src} key={item.src} alt={item.altText} />
  ))

  return (
    <>
      <Styled.CarouselWrapper noBottom>
        <CarouselWrap items={images}>
          <ImageWrapper />
        </CarouselWrap>
      </Styled.CarouselWrapper>
      <Styled.ImageWrapper>
        {images.map((item, i) => (
          <Box key={i} mb={0}>
            {item}
          </Box>
        ))}
      </Styled.ImageWrapper>
    </>
  )
}

const ProductDetail = () => {
  const { productData, currentVariant } = useContext(ProductCtx)
  const { descriptionHtml, title } = productData

  return (
    <div>
      <Styled.StickyPanel>
        <Section.Padding>
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
          <Box mb={5}>
            <Styled.Description
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </Box>
          <AddToCartButton />
        </Section.Padding>
      </Styled.StickyPanel>
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

export const ProductOptions = () => {
  const { productData } = useContext(ProductCtx)

  return (
    <>
      {productData.options.map(option => {
        // only return if there are multiple options
        const isCircleVariant = option.values
          .map(v => v.value.length)
          .some(e => e < 2)

        const isGenericTitle = option.name === 'Title'

        return option.values.length > 1 ? (
          <Box mb={3} key={option.name}>
            {!isGenericTitle && <h5>{option.name}</h5>}
            <ul>
              {option.values.map((variant, i) => {
                return (
                  <Variant
                    isFullWidth={!isCircleVariant}
                    optionCategory={option.name}
                    optionName={variant.value}
                    key={variant.value}
                  />
                )
              })}
            </ul>
          </Box>
        ) : null
      })}
    </>
  )
}

const Variant = ({ optionName, optionCategory, isFullWidth }) => {
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
      isSelected={selectedOptions[optionCategory] === optionName}
      isAvailable
      isFullWidth={isFullWidth}
      key={optionName}
      onClick={() => updateOptions({ [optionCategory]: optionName })}
    >
      {optionName}
    </Styled.Option>
  )
}

const AddToCartButton = () => {
  const { currentVariant, setModalOpen } = useContext(ProductCtx)
  const { addItem } = useContext(StoreCtx)

  return (
    <>
      {currentVariant.available ? (
        <Button
          disabled={!currentVariant.available}
          onClick={currentVariant ? () => addItem(currentVariant.id) : null}
        >
          {currentVariant.available ? 'Add to Cart' : 'Unavailable'}
        </Button>
      ) : (
        <Box mb={0}>
          <Button onClick={() => setModalOpen(true)}>
            Notify when available
          </Button>
        </Box>
      )}
    </>
  )
}

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
}

export default Product
