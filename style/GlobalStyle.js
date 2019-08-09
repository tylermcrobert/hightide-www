import { createGlobalStyle, css } from 'styled-components'
import { reset } from 'styled-reset'
import { mq, routeTransition } from './theme'

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
      font-size: 22px;
    }

    @media ${mq.md} {
      font-size: 22px;
    }

    @media ${mq.lg} {
      font-size: 22px;
    }
  }

  body {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    font-weight: 300;
    line-height: 1.2;
    padding-top: ${props => props.theme.navHeight};

    transition: color ${routeTransition}, background ${routeTransition};
  }

  a {
    color: ${props => props.theme.colors.primary};
    transition: color ${routeTransition};
  }

  strong {
    font-weight: 500;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: ${props => props.theme.margins.standard};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes[5]};
    font-family: ${props => props.theme.fontFamilies.serif};

    @media ${mq.xs} {
      font-size: ${props => props.theme.fontSizes[6]};
    }
    @media ${mq.sm} {
      font-size: ${props => props.theme.fontSizes[7]};
    }
  }

  h2,
  h3,
  h4 {
    font-size: ${props => props.theme.fontSizes[4]};

    @media ${mq.md} {
      font-size: ${props => props.theme.fontSizes[5]};
    }
  }

  h5,
  h6 {
    font-size: ${props => props.theme.fontSizes[2]};
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle
