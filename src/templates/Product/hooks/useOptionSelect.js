import { useState } from 'react'

// For initial state

const getObjFromVariant = variant =>
  variant.selectedOptions.reduce(
    (acc, option) => ({ ...acc, [option.name]: option.value }),
    {}
  )

const getInitialOptions = productData => {
  const availableVariants = productData.variants.filter(item => item.available)
  const firstAvailableVariant = availableVariants[0]
  return getObjFromVariant(firstAvailableVariant || productData.variants[0])
}

// Main hook

const useOptionSelect = productData => {
  const [selectedOptions, setcurrentOptions] = useState(
    getInitialOptions(productData)
  )

  const updateOptions = newOption =>
    setcurrentOptions({ ...selectedOptions, ...newOption })

  return { updateOptions, selectedOptions }
}

export default useOptionSelect
