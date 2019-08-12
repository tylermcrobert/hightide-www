/*
  Get every nth item item [nthItem]
  starting at y [start]
*/
const nth = (arr, nthItem, start = 0) =>
  arr
    /*
      get starting point by making a new
      array without first [start]
    */
    .slice(start, arr.length)
    /*
      use new shortened array
      to grab every x number
    */
    .filter((_, i) => i % nthItem === 0);

/* split array into subarrays */
const splitArr = (arr, cols) =>
  /*
    create empty array (col amount) items
  */
  Array.from({ length: cols })
    /*
      loop through and get every (col amount)
      items, starting at (col number)
    */
    .map((item, i) => nth(arr, cols, i));

export default splitArr;
