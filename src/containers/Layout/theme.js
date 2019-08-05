import modularScale from './modularScale'

export const navHeight = '4rem'

export const fontSizes = modularScale.map(item => `${item}rem`)

export const fontFamilies = {
  serif: 'Lyon-Light, georgia, serif',
  sansSerif: '"America-Light", helvetica, arial, sans-serif'
}

export const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  midGrey: '#8C8C8C',
  offWhite: '#fbfbfb'
}

export const sizes = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576
}

const ease = {
  standard: 'cubic-bezier(.36,.77,.53,.98)'
}

export const lineLengths = ['30em', '35em']

export const mq = Object.keys(sizes).reduce(
  (acc, current) => ({
    ...acc,
    [current]: `(min-width: ${sizes[current]}px)`
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
