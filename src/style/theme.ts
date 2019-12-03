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
  error: '#ff4938',
  warn: '#F5C350',
  success: '#83CB57',
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
  decel: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  accel: 'cubic-bezier(0.4, 0.0, 1, 1)',
}

const margins = {
  standard: fontSizes[4],
  slim: fontSizes[1],
}

export const lineLengths = ['30em', '35em']

export const lineHeights = {
  tight: 1.2,
  standard: 1.5,
  loose: 1.75,
}

const reducer = (acc, current) => ({
  ...acc,
  [current]: `(min-width: ${sizes[current]}px)`,
})

export const mq = Object.keys(sizes).reduce(reducer, {})

const ROUTE_TRANSITION_DURATION = 250
// Blank time between
const ROUTE_TRANSITION_DELAY = 100

const ROUTE_TRANSIITON_TIMEOUT =
  ROUTE_TRANSITION_DURATION + ROUTE_TRANSITION_DELAY

export const routeTransition = {
  duration: ROUTE_TRANSITION_DURATION,
  css: `${ROUTE_TRANSIITON_TIMEOUT}ms ${ease.decel}`,
  timeout: ROUTE_TRANSIITON_TIMEOUT,
  distance: 0.5,
}

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
  routeTransition,
  lineHeights,
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
