import { useState } from 'react'
import { client } from 'middleware/getShopifyCheckout'

const useVariant = productData => {
  const blankOptions = productData.options.reduce((acc, cur) => {
    return { ...acc, [cur.name]: null }
  }, {})

  const [currentOptions, setcurrentOptions] = useState(blankOptions)

  const currentVariant = client.product.helpers.variantForOptions(
    productData,
    currentOptions
  )

  const updateOption = newOption => {
    setcurrentOptions({ ...currentOptions, ...newOption })
  }

  return { currentVariant, updateOption, currentOptions }
}

export default useVariant
