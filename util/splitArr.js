
const splitArray = (inputArray, subArrays) =>
  Array.from({ length: subArrays }).map((_, subArrIndex) =>
    inputArray
      .slice(subArrIndex, inputArray.length)
      .filter((filterItem, filterIndex) => filterIndex % subArrays === 0)
  );
