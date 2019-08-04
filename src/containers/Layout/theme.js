import modularScale from './modularScale'

export const navHeight = '5rem'

export const fontSizes = modularScale.map(item => `${item}rem`)

export const fontFamilies = {
  serif: 'CaslonStd, georgia, serif',
  sansSerif: '"America-Light", arial, sans-serif'
}

export const colors = {
  black: '#2E2A25',
  white: '#ffffff',
  midGrey: '#8C8C8C',
  offWhite: '#fbfbfb'
}

export const sizes = {
  xl: '1440px',
  lg: '1024px',
  md: '768px',
  sm: '576px',
  xs: '0px'
}

const ease = {
  standard: 'cubic-bezier(.36,.77,.53,.98)'
}

export const lineLengths = ['30em', '35em']

export const mq = Object.keys(sizes).reduce(
  (acc, current) => ({
    ...acc,
    [current]: `(min-width: ${sizes[current]})`
  }),
  {}
)

export default {
  colors,
  fontSizes,
  fontFamilies,
  navHeight,
  ease,
  sizes,
  lineLengths,
  mq
}
