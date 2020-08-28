import styled, { css } from 'styled-components'
import { mq } from 'style/theme'
import Section from 'components/Section'

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
  border-radius: 999px;
  border: 1px solid ${props => props.theme.colors.grey};
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  overflow: hidden;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.isFullWidth &&
    css`
      padding: 0.5rem 3rem;
      margin: 0 0.5rem 0.5rem 0;
    `}

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

  span[style='text-decoration: underline;'] {
    text-decoration: none !important;
    border-bottom: 1px solid black;
  }

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

const ImageWrapper = styled(Section)`
  display: none;
  @media ${COL_BREAKPOINT} {
    display: block;
  }
`

const CarouselWrapper = styled(Section)`
  display: block;
  @media ${COL_BREAKPOINT} {
    display: none;
  }
`

const StickyPanel = styled.div`
  position: sticky;
  top: ${props => props.theme.navHeight};
`

const BackInStockModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BackInStockModal = styled.div`
  max-width: 25em;
  background: white;
  padding: 1rem;
`

const ModalShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`

export default {
  BackInStockModalWrapper,
  ModalShadow,
  Wrapper,
  Description,
  Option,
  StickyPanel,
  ImageWrapper,
  CarouselWrapper,
  BackInStockModal,
}
