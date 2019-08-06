import styled from 'styled-components/macro'

const Footer = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 1px 0;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.5;

  p {
    color: ${props => props.theme.colors.grey};
  }
`

export default { Footer }
