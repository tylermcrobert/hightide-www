import { createGlobalStyle, css } from 'styled-components'
import { reset } from 'styled-reset'
import { mq, routeTransition } from './theme'

export const HEADING_LEVELS = [
  css`
    font-size: ${props => props.theme.fontSizes[5]};
    font-family: ${props => props.theme.fontFamilies.serif};

    @media ${mq.xs} {
      font-size: ${props => props.theme.fontSizes[6]};
    }
    @media ${mq.sm} {
      font-size: ${props => props.theme.fontSizes[7]};
    }
  `,
  css`
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    font-size: ${props => props.theme.fontSizes[4]};
    font-weight: 300;

    @media ${mq.md} {
      font-size: ${props => props.theme.fontSizes[5]};
    }
  `,
  css`
    font-size: ${props => props.theme.fontSizes[2]};
  `,
]

const style = css`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 18px;

    @media ${mq.sm} {
      font-size: 19px;
    }

    @media ${mq.md} {
      font-size: 20px;
    }

    @media ${mq.lg} {
      font-size: 22px;
    }
  }

  body {
    background: ${props =>
      props.theme.isDark
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    font-weight: 300;
    line-height: 1.2;
    padding-top: ${props => props.theme.navHeight};

    transition: color ${routeTransition.css}, background ${routeTransition.css};
    will-change: color, background;
  }

  a {
    color: ${props => props.theme.colors.primary};
    transition: color ${routeTransition.css};
    will-change: color;
    text-decoration: none;
  }

  p {
    line-height: ${props => props.theme.lineHeights.standard};
  }

  strong {
    font-weight: 500;
  }

  em {
    font-style: italic;
  }

  img,
  video {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 0.8rem;
  }

  h1 {
    ${HEADING_LEVELS[0]}
  }

  h2,
  h3,
  h4 {
    ${HEADING_LEVELS[1]}
  }

  h5,
  h6 {
    ${HEADING_LEVELS[2]}
  }
`

const buttonStyle = css`
  button,
  input[type='submit'],
  input[type='reset'] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
  ${buttonStyle}
`

export default GlobalStyle
