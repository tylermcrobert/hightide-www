import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
  margin: 0 ${props => props.theme.margins.standard};
`

const Image = styled.div`
  height: 0;
  padding-top: ${(2 / 3) * 100}%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
  }
`

export default { Wrapper, Link, Image }
