/*

Natural indexing

0 1
0 2
3 4
5 4

...etc

Intended indexing

0 1
0 2
3 5
4 5
*/
const isNth = (i: number, nth: number): boolean => (i - nth) % 6 === 0

// get presentational order
const getOrder = (i: number): number => {
  // swap 4 and 5
  if (isNth(i, 4)) return i + 1
  if (isNth(i, 5)) return i - 1
  // otherwise return index
  return i
}

const getLayout = (i: number): { order: number; isLarge: boolean } => ({
  order: getOrder(i),
  isLarge: isNth(i, 0) || isNth(i, 5),
})

export default getLayout
