import modularScale from './modularScale'

export const navHeight = '4rem'

export const fontSizes = modularScale.map(item => `${item}rem`)

export const fontFamilies = {
  serif: '"Lyon", georgia, serif',
  sansSerif: '"America", helvetica, arial, sans-serif',
}

export const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  grey: '#939598',
}

export const sizes = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576,
}

const ease = {
  standard: 'cubic-bezier(.36,.77,.53,.98)',
}

const margins = {
  standard: fontSizes[3],
  slim: fontSizes[1],
}

export const lineLengths = ['30em', '35em']

export const mq = Object.keys(sizes).reduce(
  (acc, current) => ({
    ...acc,
    [current]: `(min-width: ${sizes[current]}px)`,
  }),
  {}
)

const theme = {
  colors,
  fontSizes,
  fontFamilies,
  navHeight,
  ease,
  sizes,
  lineLengths,
  mq,
  margins,
}

export const invertedTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.secondary,
    secondary: theme.colors.primary,
  },
}

export default theme
