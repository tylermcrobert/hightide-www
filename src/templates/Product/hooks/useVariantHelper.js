import { useState } from 'react'
import { client } from 'middleware/getShopifyCheckout'

const useVariantHelper = productData => {
  // change to firstAvailableOptions or firstOptions (idk which)
  const blankOptions = productData.options.reduce((acc, cur) => {
    return { ...acc, [cur.name]: null }
  }, {})

  const [selectedOptions, setcurrentOptions] = useState(blankOptions)

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
