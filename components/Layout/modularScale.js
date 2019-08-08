import ms from 'modularscale-js'

const LENGTH = 20
const STEPS_DOWN = 2
const RATIO = 1.25
const BASE = 1

const modularScale = Array.from({ length: LENGTH }, (_, i) => i - STEPS_DOWN)
  .map(i =>
    ms(i, {
      base: BASE,
      ratio: RATIO,
    })
  )
  .map(item => Math.round(item * 100) / 100)

export default modularScale
