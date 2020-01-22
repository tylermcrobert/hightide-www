import styled from 'styled-components'
import { HEADING_LEVELS } from 'style/GlobalStyle'

interface HeadingProps {
  headingStyle: number
  noMargin?: boolean
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'li' | 'div'
}

const Heading = styled.h1<HeadingProps>`
  ${props => HEADING_LEVELS[props.headingStyle]};
  margin-bottom: ${props => (props.noMargin ? 0 : props.theme.fontSizes[2])};
`

export default Heading
