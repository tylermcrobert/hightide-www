const isNth = (i: number, nth: number): boolean => (i + nth) % 6 === 0

/*

a b
a c
d f
e f

*/

const getOrder = (i: number): number => {
  if (isNth(i, 2)) {
    return i + 1
  }

  if (isNth(i, 1)) {
    return i - 1
  }

  return i
}

const getLayout = (
  i: number
): {
  order: number
  isLarge: boolean
} => {
  const order = getOrder(i)
  const isLargeLeft = isNth(i, 0)
  const isLargeRight = isNth(i, 1)

  return {
    order,
    isLarge: isLargeRight || isLargeLeft,
  }
}

export default getLayout
