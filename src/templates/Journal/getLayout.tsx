/*

a b
a c
d f
e f

*/
const isNth = (i: number, nth: number): boolean => (i - nth) % 6 === 0

const getOrder = (i: number): number => {
  if (isNth(i, 4)) return i + 1
  if (isNth(i, 5)) return i - 1
  return i
}

const getLayout = (
  i: number
): {
  order: number
  isLarge: boolean
} => ({
  order: getOrder(i),
  isLarge: isNth(i, 0) || isNth(i, 5),
})

export default getLayout
