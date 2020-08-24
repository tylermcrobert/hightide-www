const subArr = (array: any[], n: number): any[] => {
  const subArrCount = array.length / n

  const emptySubArrs = Array.from({ length: subArrCount })

  const fullSubArrs = emptySubArrs.map((_, i) => {
    const ArrStart = i * n
    return [...array].slice(ArrStart, ArrStart + n)
  })

  const remainder = array.length % n

  if (remainder) {
    const remainderArr = [...array].slice(
      array.length - remainder,
      array.length
    )

    return [...fullSubArrs, remainderArr]
  }

  return [...fullSubArrs]
}

export default subArr
