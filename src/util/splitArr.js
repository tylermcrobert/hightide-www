const splitArray = (inputArray, subArrays = 1) =>
  Array.from({ length: subArrays }).map((_, subArrIndex) =>
    inputArray.filter(
      (filterItem, filterIndex) => filterIndex % subArrays === 0 + subArrIndex
    )
  )

export default splitArray
