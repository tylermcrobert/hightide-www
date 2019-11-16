import { useState } from 'react'

const getInitialOptions = productData =>
  productData.options.reduce(
    (acc, cur) => ({ ...acc, [cur.name]: cur.values[0].value }),
    {}
  )

const useOptionSelect = productData => {
  const [selectedOptions, setcurrentOptions] = useState(
    getInitialOptions(productData)
  )

  const updateOptions = newOption =>
    setcurrentOptions({ ...selectedOptions, ...newOption })

  return { updateOptions, selectedOptions }
}

export default useOptionSelect
