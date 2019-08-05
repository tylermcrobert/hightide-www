import { createGlobalStyle, css } from 'styled-components/macro'
import { reset } from 'styled-reset'
import { mq } from './theme'

const style = css`
  @font-face {
    font-family: 'America-Light';
    src: url(${require('assets/fonts/GT-America-Standard-Light.eot')});
    src: url(${require('assets/fonts/GT-America-Standard-Light.ttf')})
        format('truetype'),
      url(${require('assets/fonts/GT-America-Standard-Light.woff2')})
        format('woff2'),
      url(${require('assets/fonts/GT-America-Standard-Light.woff')})
        format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lyon-Light';
    src: url(${require('assets/fonts/LyonDisplay-Light-Web.woff2')})
        format('woff2'),
      url(${require('assets/fonts/LyonDisplay-Light-Web.woff')}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  h1,
  h2 {
    font: f;
  }
  * {
    box-sizing: border-box;
  }
  body,
  html {
    font-size: 20px;

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
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: ${props => props.theme.navHeight};
  }

  a {
    color: black;
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
    margin-bottom: 1rem;
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
