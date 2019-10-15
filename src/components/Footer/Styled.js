import styled from 'styled-components'
import { mq } from 'style/theme'

const Footer = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 1px 0;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.5;

  h5 {
    margin-bottom: ${props => props.theme.margins.slim};
  }

  p,
  a {
    color: ${props => props.theme.colors.grey};
    display: block;
  }
`

const Grid = styled.div`
  @media ${mq.xs} {
    display: grid;
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${mq.md} {
    grid-template-columns: 2fr 1fr 1fr;
  }
`

const StayUpdated = styled.input`
  margin: 0;
  border: 0;
  padding: 0;
  display: block;
  white-space: normal;
  background: none;
  font-size: inherit;
  color: ${props => props.theme.colors.grey};
  width: 100%;
  max-width: 14em;

  margin-top: ${props => props.theme.margins.standard};

  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};

  transition: 400ms border-bottom-color ${props => props.theme.ease.standard};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
  }
`

export default { Footer, Grid, StayUpdated }
