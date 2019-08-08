import { createGlobalStyle, css } from 'styled-components'
import { reset } from 'styled-reset'
import { mq } from './theme'
import AmericaLtWoff2 from '../assets/fonts/GT-America-Standard-Light.woff2'
import AmericaLtWoff from '../assets/fonts/GT-America-Standard-Light.woff'
import AmericaLtTtf from '../assets/fonts/GT-America-Standard-Light.ttf'

import AmericaMdWoff2 from '../assets/fonts/GT-America-Standard-Medium.woff2'
import AmericaMdWoff from '../assets/fonts/GT-America-Standard-Medium.woff'
import AmericaMdTtf from '../assets/fonts/GT-America-Standard-Medium.ttf'

import LyonLtWoff from '../assets/fonts/LyonDisplay-Light-Web.woff'
import LyonLtWoff2 from '../assets/fonts/LyonDisplay-Light-Web.woff2'

const style = css`
  @font-face {
    font-family: 'America';
    src: url(${AmericaLtWoff2}) format('woff2'),
      url(${AmericaLtWoff}) format('woff'), url(${AmericaLtTtf}) format('ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'America';
    src: url(${AmericaMdWoff2}) format('woff2'),
      url(${AmericaMdWoff}) format('woff'), url(${AmericaMdTtf}) format('ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Lyon';
    src: url(${LyonLtWoff2}) format('woff2'), url(${LyonLtWoff}) format('woff');
    font-weight: 500;
  }

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
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    font-weight: 300;
    line-height: 1.2;
    padding-top: ${props => props.theme.navHeight};
  }

  a {
    color: black;
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
