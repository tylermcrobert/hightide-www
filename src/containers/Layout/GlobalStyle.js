import { createGlobalStyle, css } from 'styled-components'
import { reset } from 'styled-reset'
import { mq } from './theme'

const style = css`
  body,
  html {
    font-size: 16.5px;

    @media ${mq.sm} {
      font-size: 18px;
    }

    @media ${mq.md} {
      font-size: 19px;
    }

    @media ${mq.lg} {
      font-size: 12px;
    }
  }

  body {
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    line-height: 1.5;
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

  h1 {
    font-size: ${props => props.theme.fontSizes[6]};
  }
  h2 {
    font-size: ${props => props.theme.fontSizes[5]};
  }
  h3 {
    font-size: ${props => props.theme.fontSizes[4]};
  }
  h4 {
    font-size: ${props => props.theme.fontSizes[3]};
  }
  h5 {
    font-size: ${props => props.theme.fontSizes[2]};
  }
  h6 {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle
