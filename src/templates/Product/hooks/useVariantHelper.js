import { useState } from 'react'
import { client } from 'middleware/getShopifyCheckout'

const useVariantHelper = productData => {
  const firstOptions = productData.options.reduce(
    (acc, cur) => ({ ...acc, [cur.name]: cur.values[0].value }),
    {}
  )

  const [selectedOptions, setcurrentOptions] = useState(firstOptions)

  const currentVariant = client.product.helpers.variantForOptions(
    productData,
    selectedOptions
  )

  const updateOption = newOption => {
    setcurrentOptions({ ...selectedOptions, ...newOption })
  }

  return { currentVariant, updateOption, selectedOptions }
}

export default useVariantHelper
