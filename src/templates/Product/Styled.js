import styled, { css } from 'styled-components'
import { mq } from 'style/theme'

const COL_BREAKPOINT = mq.xs

const Wrapper = styled.div`
  @media ${COL_BREAKPOINT} {
    display: grid;
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: 1fr 1fr;
  }
  @media ${mq.sm} {
    grid-template-columns: 3fr 2fr;
  }
`

const Option = styled.li`
  display: inline-flex;
  font-size: ${props => props.theme.fontSizes[1]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.grey};
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  overflow: hidden;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.isSelected &&
    css`
      border: 1px solid ${props.theme.colors.primary};
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.secondary};
    `};

  ${props =>
    !props.isAvailable &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `};
`

const Description = styled.div`
  line-height: 1.5;

  li {
    padding-left: 1em;
    position: relative;
    margin-bottom: 0.5rem;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
    }
  }
`

const ImageWrapper = styled.div`
  display: none;
  @media ${COL_BREAKPOINT} {
    display: block;
  }
`

const CarouselWrapper = styled.div`
  display: block;
  @media ${COL_BREAKPOINT} {
    display: none;
  }
`

export default {
  Wrapper,
  Description,
  Option,

  ImageWrapper,
  CarouselWrapper,
}
