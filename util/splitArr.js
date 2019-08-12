const splitArray = (inputArray, subArrays = 2) =>
  Array.from({ length: subArrays }).map((_, subArrIndex) =>
    inputArray.filter(
      (filterItem, filterIndex) => filterIndex % subArrays === 0 + subArrIndex
    )
  );
